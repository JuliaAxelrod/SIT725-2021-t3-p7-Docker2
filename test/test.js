const expect = require("chai").expect;
const request = require("request");

const dbo = require ('../db/conn');


describe('test get all projects', () => {
    const url = "http://localhost:8080/api/projects"

    //set up clear the db and insert 10 dummy projects

    // "projectID": $('#project-id').val(), // 212,
    // "projectDate": $('#project-date').val(), // "2017-03-12T13:37:27+00:00",
    // "title": $('#project-title').val(), // "project 212",
    // "info": $('#project-info').val(), // "Cierva Cove, Antarctica ",
    // "img": d   // $('#project-image').val() // null

        before((done) => {
        dbo.connect(() => {
            const projectCollection = dbo.getDB().collection("projects");
            //clear the database
            projectCollection.deleteMany({});
            //create 10 dummy projects
            const projects = [];
            for (let i = 1; i < 11; i++) {
                projects.push({
                    projectID: i,
                    projectDate: Date.now(),
                    title: 'title ' + i,
                    info: 'info ' + i,
                    img: 'Img' + i
                })
            }
            projectCollection.insertMany(projects,()=>{
                dbo.disconnect();
                // done();
            });
        });
        done();
    });

    // Test 1 check API
    it("returns status code 200 when calling api", (done) => {
        request(url, (err, response, body) => {
            //if the response.statusCode == 200
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    // Test 2 not found by Title
    const urlNOTFindByTitle = "http://localhost:8080/api/projects/projectTitle/NotThere"
    it("returns status code 200 when calling api - By Wrong Title", (done) => {
        request(urlNOTFindByTitle, (err, response, body) => {
            //if the response.statusCode == 200
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    // Test 3  found by Title
    const urlFindByTitle = "http://localhost:8080/api/projects/projectTitle/title 1"
    it("returns status code 200 when calling api - By Existing Title", (done) => {
        request(urlFindByTitle, (err, response, body) => {
            //if the response.statusCode == 200
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    // Test 4 not found by Date
    const urlFindBydate = "http://localhost:8080/api/projects/projectDate/2022-02-11"
    it("returns status code 400 when calling api - date does not exst", (done) => {
        request(urlFindBydate, (err, response, body) => {
            //if the response.statusCode == 400
            expect(response.statusCode).to.equal(400);
            done(); 
        });
    });

    // Test 5 Bad Date
    const urlByBadDate = "http://localhost:8080/api/projects/projectDate/kkk"
    it("returns status code 200 when calling api - bad date", (done) => {
        request(urlByBadDate, (err, response, body) => {
            //if the response.statusCode == 200
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    // Test 6 returns exactly 10 projects
    it("returns exactly 10 projects as body of the response", (done) => {
        request(url, (err, response, body) => {
            //if the body.result is a number
            body = JSON.parse(body);
            expect(body.length).to.equal(10);
            done();
        });
    });

    // Test 7 Insert one, get one - part 1
    const urlByInsertOne = "http://localhost:8080/api/projects/"
    it("returns status code 200 when calling api - creates new entry", (done) => {
        dbo.connect(() => {
            const projectCollection = dbo.getDB().collection("projects");

            const projects = [];
                let i = 15;
                projects.push({
                    projectID: 15,
                    projectDate: Date.now(),
                    title: 'title ' + i,
                    info: 'info ' + i,
                    img: 'img ' + i
                })
          
            projectCollection.insertMany(projects,()=>{
                dbo.disconnect();

                // done();
            });
        });
        done();
    });

    // Test 7 Insert one, get one - part 2
    const urlCheckInsertOne = "http://localhost:8080/api/projects/15"
    it("returns status code 200 when calling api - finds new entry", (done) => {
        request(urlCheckInsertOne, (err, response, body) => {
            //if the response.statusCode == 200
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
 
    // Test 8 - return an array as the body ofrequest
    it("returns an array as the body of request", (done) => {
        request(url, (err, response, body) => {
            //if the body.result is a number
            body = JSON.parse(body);
            expect(body).to.be.a("array");
            done();
        });
    });


    after((done) => {
        dbo.connect(() => {
            const projectCollection = dbo.getDB().collection("projects");

            //clear the database
            projectCollection.deleteMany({});
            //create 10 dummy projects
            const projects = [];
            for (let i = 10; i < 21; i++) {
                projects.push({
                    projectID: i,
                    projectDate: Date.now(),
                    title: 'title ' + i,
                    info: 'info ' + i,
                    img: 'img ' + i
                })
            }
            projectCollection.insertMany(projects,()=>{
                dbo.disconnect();

            });
          
        });
        done();
    });

        // Test 6 returns exactly 10 projects
        it("returns exactly 10 projects as body of the response", (done) => {
            request(url, (err, response, body) => {
                //if the body.result is a number
                body = JSON.parse(body);
                expect(body.length).to.equal(10);
                done();
            });
        });

});

// describe ("Test add two numbers together", () => {

//     const url = "http://localhost:8080/add/2/3";

//     it("returns status code 200 when calling api", (done) => {
//         request (url, (err, response, body) => {
//             // if the response.statusCode == 200
//             // expect(response.statusCode).to.equal(200);
//             expect(response.statusCode).to.equal(200);
//             done();    
//         });

//     });

//     it("returns status code 200 when calling api", (done) => {
//         request (url, (err, response, body) => {
//             // if the response.statusCode == 200
//             // expect(response.statusCode).to.equal(200);
//             console.log(body);
//             body = JSON.parse(body);
//             console.log(body);
//             expect(body.result).to.be.a("number");
//             done();    
//         });

//     });
// });
