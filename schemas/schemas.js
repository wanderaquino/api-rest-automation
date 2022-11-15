const userSchema = {
    title: "Unique user schema",
    type: "object",
    required: ["id","name", "username","email", "address", "phone", "website", "company"],
    properties: {
        id: {
            type: "number"
        },
        name: {
            type: "string"
        },
        username: {
            type: "string"
        },
        email: {
            type: "string"
        },
        address: {
            type: "object",
            required: ["street", "suite", "city", "zipcode", "geo"],
            properties: {
                street: {
                    type: "string"
                },
                suite: {
                    type: "string"
                },
                city: {
                    type: "string"
                },
                zipcode: {
                    type: "string"
                },
                geo: {
                    properties: {
                        required: ["lat", "lng"],
                        lat: {
                            type: "string"
                        },
                        lng: {
                            type: "string"
                        }
                    }
                }
            }
        },
        phone: {
            type: "string"
        },
        website: {
            type: "string"
        },
        company: {
            type: "object",
            properties: {
                required: ["name","catchPhrase","bs"],
                name: {
                    type: "string"
                },
                catchPhrase: {
                    type: "string"
                },
                bs: {
                    type: "string"
                }
            }
        }
    }
}

module.exports = userSchema;