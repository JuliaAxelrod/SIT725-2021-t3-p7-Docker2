const express = require ("express");
// const res = require("express/lib/response");
const router = express.Router();

const projectService = require ("../services/projects");
     

router.get('/',(req,res) => {
    projectService.getAllProjects(res);
});

router.get('/:id',(req,res) => {
    projectService.getProjectByID(req.params.id, res);
});

// localhost:8080/api/projects/projectTitle/Test 1
router.get('/projectTitle/:title',(req,res) => {
    console.log ("title ", req.params.title);
    projectService.getProjectByTitle(req.params.title, res);
});

// localhost:8080/api/projects/projectDate/2022-02-11 
// date is greater than Jan 01 1950 - arbitrary
router.get('/projectDate/:projectDate',(req,res) => {
    console.log ("date???", req.params.projectDate);
    console.log (typeof (req.params.projectDate))
    if (!( isNaN (parseInt(req.params.projectDate))) || req.params.projectDate <= -631188000000)
    res.sendStatus(400);
    else
    projectService.getProjectByDate(req.params.projectDate, res);
});

// localhost:8080/api/projects/projectInfo/Cierva cove 2
router.get('/projectInfo/:info',(req,res) => {
    console.log ("info???", req.params.info);
    projectService.getProjectByInfo(req.params.info, res);
});

// create data
router.post('/',(req,res) => {
    // req body
    projectService.insertProject(req.body, res, req.io);
});

// update data
router.put('/:id',(req,res) => {
    // req body
    res.send( "Hello from Project  UPDATEs" + req.params.id +" get all resources API");
});

router.delete('/:id',(req,res) => {
    console.log ("Delete???", req.params.id);
    projectService.deleteProject(req.params.id, res, req.io);
});

module.exports = router;



 