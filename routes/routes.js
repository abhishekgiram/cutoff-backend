const express = require('express');
const Model = require('../models/model');
const CutOffs = require('../models/cutoffs');
const router = express.Router();

//Post Method
router.post('/postCutOff', async (req, res) => {
    const cutOff = new CutOffs({
        college: req.body.college,
        branch: req.body.branch ,
        capRound: req.body.capRound ,
        caste: req.body.caste ,
        score: req.body.score ,
        rank: req.body.rank
    })
    try {
        const dataToSave = await cutOff.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})



//Get all Method
router.get('/getAllCutOffList', async (req, res) => {
    try {
        const data = await CutOffs.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/getByMarks/', async (req, res) => {
    try {
   const inputValue = {
            score :  { $lte:  req.body.score } ,
            //caste: req.body.caste, capRound: req.body.capRound
            } 
            console.log(inputValue)
         const data = await CutOffs.find(inputValue);
        console.log(data)
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})


//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;