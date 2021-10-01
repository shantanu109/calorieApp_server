let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');




chai.should();


chai.use(chaiHttp);

describe('Tasks API', () => {

    describe("POST /api/v1/users/create-session" , () => {

        it("IT SHOULD RETURN THE USER" , (done) => {
            const task = {
                email:'grp28@gmail.com',
                password:'123'
            };

            chai.request('http://localhost:8000')
                .post("/api/v1/users/create-session")
                .send(task)
                .end((err,response) => {
                    
                    response.body.should.be.a('object');
    
                    console.log('*********',response.body)
                  

                done();

                });
        })

    })

        describe("GET /users/search/:name" , () => {

            it("IT SHOULD GET HISTORY" , (done) => {
                const task = "masala" ;
    
                chai.request('http://localhost:8000')
                    .get("/users/search/" + task )
                    .end((err,response) => {
                        
                        response.body.should.be.a('object');
                        
                        console.log('*********',response.body)
                       
    
                    done();
    
                    });
            })
    })
})