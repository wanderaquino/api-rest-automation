const newUser = require("../../helpers/data.js");
const userSchema = require("../../schemas/schemas.js");
const chai = require("chai");
const jsonSchema = require("chai-json-schema");
const sinon = require("sinon");
const Service = require("../../src/service.js");
const {users, userById, emptyUser} = require("../../database");

chai.use(jsonSchema);


describe("Test suite for /GET Users endpoint", () => {
    it("Shoud return a array of users", async () => {

        const response = await api.get("/users");
        const {"content-type": contentType} = response.headers;
        const {status} = response;

        expect(200).to.equal(status);
        expect("application/json; charset=utf-8").to.equal(contentType);
        expect(response.data).to.be.an("Array");
        
        response.data.forEach(user => {
            expect(user).to.be.jsonSchema(userSchema);
        });
    });

    it("Shoud return an user by id", async () => {
        const id = 10;
        const response = await api.get(`/users/${id}`);
        const {status, data} = response;
        const {name, username, email} = response.data;

        expect(200).to.be.equal(status);
        expect("Clementina DuBuque").to.equal(name);
        expect("Moriah.Stanton").to.equal(username);
        expect("Rey.Padberg@karina.biz").to.equal(email);
        expect(data).to.be.jsonSchema(userSchema);

    });

    it("Shoud not find a user by unknown id", async () => {
        const id = 0;
        try {
            await api.get(`/users/${id}`);
        }
        catch (error) {
            const {status, statusText, data} = error.response;
            expect(404).to.be.equal(status);
            expect("Not Found").to.be.equal(statusText);
            expect({}).to.deep.equal(data);
        }
    });
});

describe("Test suite for /POST Users endpoint", () => {
    it("Should create a new user", async () => {
        const response = await api.post("/users", newUser);
        const {status, data}  = response;
        expect(201).to.be.equal(status);
        expect(data).to.be.jsonSchema(userSchema);
    });
});

describe("Test suite for /DELETE Users endpoint", () => {
    it("Should delete a existing user", async () => {
        const id = 10;
        const response = await api.delete(`/users/${id}`);
        const {status, data} = response;

        expect(200).to.be.equal(status);
        expect({}).to.deep.equal(data);
    });
});

describe("Test suite for /PUT Users endpoint", () => {
    it("Should update an existing user by id", async () => {
        const id = 5;
        const response = await api.put(`/users/${id}`, newUser);
        const {status, data} = response;
        expect(200).to.be.equal(status);
        expect(data).to.be.jsonSchema(userSchema);
    });

    it("Should not update a user by unknown id ", async () => {
        const id = 0;
        try {
            await api.put(`/users/${id}`, newUser);
        }
        catch (error) {
            const {status, statusText, data} = error.response;
            expect(500).to.be.equal(status);
            expect("Internal Server Error").to.be.equal(statusText);
        }
    });
})

