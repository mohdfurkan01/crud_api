const express = require("express");
const router = new express.Router();
const Student = require("../models/students");

router.post("/createContact", async (req, res) => {
    try {
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);

    } catch (e) { 
        res.status(400).send(e);
}})
router.get("/getContact", async (req, res) => {
     try {
        const studentsData = await Student.find();
        res.status(201).send(studentsData);
    } catch (e) {
        res.status(400).send(e);
}})
router.get("/getContact/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const studentData = await Student.findById(_id);
       if (!studentData) {
            return res.status(404).send();
        } else {
            res.send(studentData);
        }
    } catch (e) { 
        res.status(500).send(e);
}})
router.delete("/deleteContact/:id", async (req, res) => {
    try {
         const deleteStudent = await Student.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
            return res.status(400).send();
        }
        res.send("Deleted successfully");
    } catch (e) {
        res.status(500).send(e);
    }
})
router.patch("/updateContact/:id", async (req, res) => {
    try {
        //const _id = req.params.id({_id : id}) OR
        const _id = req.params.id;
        const updateStudent = await Student.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.send("Updated successfully");
    } catch (e) {
        res.status(400).send(updateStudent);
}})
module.exports = router;


