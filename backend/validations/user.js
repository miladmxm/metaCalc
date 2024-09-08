import ajv from "./ajvInstance.js"

const weekUpdateSchema = {
    type: 'object',
    properties: {
        dayes: {
            type: "object", properties: {
                mon: {
                    type: "object",
                    properties: {
                        profit: { type: "float" }, commission: { type: "float" }
                    }
                },
                tue: {
                    type: "object",
                    properties: {
                        profit: { type: "float" }, commission: { type: "float" }
                    }
                },
                wed: {
                    type: "object",
                    properties: {
                        profit: { type: "float" }, commission: { type: "float" }
                    }
                },
                thu: {
                    type: "object",
                    properties: {
                        profit: { type: "float" }, commission: { type: "float" }
                    }
                },
                fri: {
                    type: "object",
                    properties: {
                        profit: { type: "float" }, commission: { type: "float" }
                    }
                }
            }
        }
    },
    required: ["dayes"],
    additionalProperties: false
}
export const weekUpdateValidation = ajv.compile(weekUpdateSchema)
