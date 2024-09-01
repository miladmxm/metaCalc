import supertest from "supertest"
import mongoose from "mongoose"
import createServer from "../utils/createServer"

const app = createServer()

describe("admin",()=>{
    beforeAll(async ()=>{
        await mongoose.connect(process.env.MONGO_URL)
    })
    afterAll(async ()=>{
        await mongoose.disconnect()
        await mongoose.connection.close()
    })

    describe("first register route",()=>{
        describe("should be register",()=>{
            it("should return 400 for validation",async()=>{
                await supertest(app).post("/admin/first").send({username:"mialdmxm",password:"1234"}).expect(400)
            })
            it("should return 201 and create admin user",async()=>{
                const {body,status} = await supertest(app).post("/admin/first").send({username:"mialdmxm",password:"1234",email:"miladmxm12@gmail.com"})
                expect(status).toBe(201)
                body.toEqual({
                    __v:0,
                    _id:expect().any(String),
                    createdAt:expect().any(String),
                    updatedAt:expect().any(String),
                    username:"miladmxm",
                    password:expect().not.toBe("1234"),
                    email:"miladmxm12@gmail.com"
                })
            })
        })
    })

    describe("login route",()=>{
        describe("login should be reject",()=>{
            it("should return 400",async ()=>{
                await supertest(app).post("/admin/login").expect(400)
            })
            it("should return 404",async ()=>{
                await supertest(app).post("/admin/login").send({username:"mialdmxmh",password:"1234"}).expect(404)
            })
        })
        // describe("login should be resolve",()=>{
        //     it("should return 200 and login",async()=>{
        //         await 
        //     })
        // })
    })
})