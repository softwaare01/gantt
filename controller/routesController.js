//const insertData = require('../repos/taskRepository');
const objModel = require('../model/ObjectData')
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const DaysOff = mongoose.model('DaysOff');


router.get('/', (req, res) => {
    res.render("controller/index.htlm", {viewTitle : "createUpdateTask"});
});

router.post('/', (req, res) => {

});



module.exports = router;

