const app=require('./index')
const supertest =require('supertest');


describe('CRUD API POST,GET,PUT', () => {

//Test cases for post method
    describe("post the data", ()=>{
        test('Post method test it should expect 200 status code',async()=>{
            const response=await supertest(app).post("/post").send({
             name : "Kiran",
             email : "karthik@gmail.com",
             id :4
            })
            expect(response.statusCode).toBe(200)
         })
        test('Get method test it should expect 200 status code',async()=>{
            const response=await supertest(app).get("/post").send({
                name : "Kiran",
                email : 12,
                id :4
            })
            expect(response.statusCode).toBe(404)
        })
        test('Post method test it should be in the json format',async()=>{
            const response=await supertest(app).post("/post").send({
             name : "Kiran",
             email : "karthik@gmail.com",
             id :5
            })
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
         })
    })




//Test cases for get method
    describe("Get the data", ()=>{
        test('Get method test it should expect 200 status code',async()=>{
            const response=await supertest(app).get("/fetch")
            expect(response.statusCode).toBe(200)
         })
         test('Get method test it should expect 200 status code',async()=>{
            const response=await supertest(app).get("/fetch1")
            expect(response.statusCode).toBe(404)
         })
         test('Get method test it should expect 200 status code',async()=>{
            const response=await supertest(app).get("/fetch")
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
         })
    })



//Test cases for put method
    describe("Put the data", ()=>{
        test('Put method test it should expect 200 status code',async()=>{
            const response=await supertest(app).put("/update/2").send({
                name : "Aba",
                email : "karthikd@gmail.com"
               })
            expect(response.statusCode).toBe(200)
         })

         test('Put method test it should expect 200 status code',async()=>{
            const response=await supertest(app).put("/update/1").send({
                name : "ram",
                email : "karthikd@gmail.com"
               })
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
         })

         test('Get method test it should expect 200 status code',async()=>{
            const response=await supertest(app).get("/update")
            expect(response.statusCode).toBe(404)
         })
    })


})
    