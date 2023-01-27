const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');
// Setting up our server so that it can read our config.env file

dotenv.config({path: './config.env'});

// Connecting to MongoDB using Mongoose
const DB = process.env.DB_URL.replace('<password>', process.env.DB_PASSWORD);
mongoose.connect(DB).then(()=>{
    console.log('Connected to Database');
});
// Starting the Server
const {PORT} = process.env;
app.listen(PORT, ()=>{
    console.log(`Server started on PORT ${PORT}`);
});