const express = require("express");
const app = express();
const ejsMate = require('ejs-mate');
const mongoose = require("mongoose");
const Routes = require('./routes/contacts');
const methodOverride = require('method-override');



const MONGO_URL = 'mongodb://127.0.0.1:27017/contactManagementDB';

async function main(){
    await mongoose.connect(MONGO_URL)
}

main().then(()=>{
    console.log("Database Connected");
}).catch(err => {
    console.log(err);
});



app.use(methodOverride('_method'));
app.engine('ejs', ejsMate);
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, 'views'));


// Routes
app.use('/', Routes);



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

