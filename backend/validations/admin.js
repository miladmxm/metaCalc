import ajv from "./ajvInstance.js"

const registerSchema = {
    type:'object',
    properties:{
        email:{type:'string',format:"email"},
        username:{type:"string",maxLength:200,minLength:3,pattern:"^\\S*$"},
        password:{type:"string",minLength:4,maxLength:100,format:"password",pattern:"^\\S*$"}
    },
    required:['email',"username","password"],
    additionalProperties:false
}
export const registerValidation = ajv.compile(registerSchema)

const loginSchema = {
    type:'object',
    properties:{
        username:{type:"string",maxLength:200,minLength:3,pattern:"^\\S*$"},
        password:{type:"string",minLength:4,maxLength:100,format:"password",pattern:"^\\S*$"}
    },
    required:["username","password"],
    additionalProperties:false
}
export const loginValidation = ajv.compile(loginSchema)
