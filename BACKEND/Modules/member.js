const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const memberSchema = new Schema({

    name : {
        type : String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    ContactNumber:{
        type: Number,
        required:true
    },
    RegNum:{
        type: Number,
        required: true
    }


})
const Member = mongoose.model("Member",memberSchema);

module.exports = Member;