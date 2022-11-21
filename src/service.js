const { request } = require("http");
const https = require("https");

class Service {
    async makeRequest(fullUrl) {
        return new Promise((resolve, reject) => {
            https.get(fullUrl, response => {
                response.on("data", data => resolve(JSON.parse(data)));
                response.on("error", reject);
            })
        })
    };

    async makePostRequest(requestUrl, requestPath, postData) {
        return new Promise((resolve, reject) => {
            const request = https.request({
                hostname: requestUrl,
                path: requestPath,
                method: "POST"
            }, (response) => {
                let responseData = "";
                response.on("data", fragment => resolve(JSON.stringify(responseData += fragment)));
                response.on("error", reject);
            });
            request.write(postData);
            request.end();
        })
    };

    async makePutRequest(requestUrl, requestPath, putData) {
        return new Promise ((resolve, reject) => {
            const request = https.request({
                hostname: requestUrl,
                path: requestPath,
                method: "PUT"
            }, (response) => {
                let frag = "";
                response.on("data", response => resolve(frag += response));
                response.on("error", reject);
            });
            request.write(putData);
            request.end();
        })
    }

    async makeDeleteRequest(requestUrl, requestPath) {
        return new Promise ((resolve, reject) => {
            const request = https.request({
                hostname: requestUrl,
                path: requestPath,
                method: "DELETE"
            }, (response) => {
                response.on("data", response => resolve(response));
                response.on("error", reject);
            });
            request.end();
        })
    }

    async getUsers(url) {
        const response = await this.makeRequest(url);
        return response;
    }

    async postUser(url, path, data) {
        const response = await this.makePostRequest(url, path, data);
        return response;
    }

    async putUser(url, path, data) {
        const response = await this.makePutRequest(url, path, data);
        return response;
    }

    async deleteUser(url, path) {
        const response = await this.makeDeleteRequest(url, path);
        return response;
    }
}

module.exports = Service;