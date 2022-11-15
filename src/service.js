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

    async getUsers(usersEndpoint) {
        const users = await this.makeRequest(usersEndpoint);
        return users;
    }
}

module.exports = Service;