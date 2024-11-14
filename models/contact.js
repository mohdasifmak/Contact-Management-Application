
const mongoose = require('mongoose');



const Contact = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: Number, required: true},
    company: {type: String, required: true},
    job_title: {type: String, required: true},
    picture: {type: String, required: true},
})

module.exports = mongoose.model("Contact", Contact);
