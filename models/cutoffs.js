
const mongoose = require('mongoose');

const cutoffs = new mongoose.Schema({
    college: {
        required: true,
        type: String
    },
    branch: {
        required: true,
        type: String
    }
    ,
    capRound: {
        required: true,
        type: String
    }
    ,
    caste: {
        required: true,
        type: String
    }
    ,
    score: {
        required: true,
        type: Number
    }
    ,
    rank: {
        required: true,
        type: Number
    }
})


module.exports = mongoose.model('cutoffss', cutoffs, )