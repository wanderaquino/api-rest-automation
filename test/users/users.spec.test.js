const userSchema = require("../../schemas/schemas.js");
const chai = require("chai");
const jsonSchema = require("chai-json-schema");
const sinon = require("sinon");
const Service = require("../../src/service.js");
const {users, userById, emptyUser, newUser} = require("../../database");

chai.use(jsonSchema);

const service = new Service();
const stub = sinon.stub(service, service.makeRequest.name);
const stubPost = sinon.stub(service, service.makePostRequest.name);
const stubPut = sinon.stub(service, service.makePutRequest.name);
const stubDelete = sinon.stub(service, service.makeDeleteRequest.name);

describe("Test suite for /GET Users endpoint", () => {
    it("Shoud return a array of users", async () => {
        const BASE_URL = "http://jsonplaceholder.typicode.com/users";
        stub
            .withArgs(BASE_URL)
            .resolves(users);
        const response = await service.getUsers(BASE_URL);
        chai.expect(response).to.be.an("Array");
        response.forEach(user => {
            chai.expect(user).to.be.jsonSchema(userSchema);
        });
    });

    it("Shoud return an user by id", async () => {
        const BASE_URL = "http://jsonplaceholder.typicode.com/users/10";
        stub
            .withArgs(BASE_URL)
            .resolves(userById);
        const response = await service.makeRequest(BASE_URL);
        const {name, username, email} = response;

        chai.expect("Clementina DuBuque").to.equal(name);
        chai.expect("Moriah.Stanton").to.equal(username);
        chai.expect("Rey.Padberg@karina.biz").to.equal(email);
        chai.expect(response).to.be.jsonSchema(userSchema);

    });

    it("Shoud not find a user by unknown id", async () => {
        const id = 0;
        const BASE_URL = `http://jsonplaceholder.typicode.com/users/${id}`;
        stub
            .withArgs(`http://jsonplaceholder.typicode.com/users/${id}`)
            .resolves(emptyUser);

        const response = await service.makeRequest(BASE_URL);

        chai.expect(response).to.be.deep.equal(emptyUser);
    });
});

describe("Test suite for /POST Users endpoint", () => {
    it("Should create a new user", async () => {
        stubPost.withArgs("jsonplaceholder.typicode.com","/users", JSON.stringify(newUser)).resolves(JSON.stringify({id: 11}));
        const response = await service.postUser("jsonplaceholder.typicode.com","/users", JSON.stringify(newUser));
        chai.expect(response).to.be.deep.equal(JSON.stringify({id: 11}))
    });
});

describe("Test suite for /DELETE Users endpoint", () => {
    it("Should delete a existing user", async () => {
        const id = 10;
        stubDelete
            .withArgs("jsonplaceholder.typicode.com",`/users/${id}`)
            .resolves({
                statusCode: 200,
                statusText: "OK",
                data: {}
            })
        const response = await service.deleteUser("jsonplaceholder.typicode.com",`/users/${id}`);
        const {statusCode, data, statusText} = response;
        chai.expect(statusCode).to.be.equal(200);
        chai.expect(statusText).to.be.equal("OK");
        chai.expect(data).to.deep.equal({});
    });
});

describe("Test suite for /PUT Users endpoint", () => {
    it("Should update an existing user by id", async () => {
        const id = 5;
        stubPut
            .withArgs("jsonplaceholder.typicode.com",`/users/${id}`, JSON.stringify(newUser))
            .resolves({statusCode: 200, data: {id}});

        const response = await service.putUser("jsonplaceholder.typicode.com",`/users/${id}`, JSON.stringify(newUser));
        const {statusCode, data} = response;
        chai.expect(statusCode).to.be.equal(200);
        chai.expect(data).to.be.deep.equal({id});
    });

    it("Should not update a user by unknown id ", async () => {
        const id = 0;
        stubPut
            .withArgs("jsonplaceholder.typicode.com",`/users/${id}`, JSON.stringify(newUser))
            .resolves({statusCode: 500, statusText: "Internal Server Error"});
        const response = await service.putUser("jsonplaceholder.typicode.com",`/users/${id}`, JSON.stringify(newUser));
        const {statusCode, statusText} = response;
        chai.expect(statusCode).to.be.equal(500);
        chai.expect(statusText).to.be.equal("Internal Server Error");
    })
});