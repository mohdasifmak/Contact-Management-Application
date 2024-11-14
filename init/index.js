const mongoose = require('mongoose');
const Contact = require('../models/contact');
const contactsData = require('./data');

const MONGO_URL = 'mongodb://127.0.0.1:27017/contactManagementDB';



async function main(){
    await mongoose.connect(MONGO_URL)
}

main().then(()=>{
    console.log("Database Connected");
}).catch(err => {
    console.log(err);
})


const initDB = async ()=> {
    await Contact.deleteMany({});
    await Contact.insertMany(contactsData.data);
    console.log("data was initialized");
}


initDB();