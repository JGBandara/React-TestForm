const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const PORT = process.env.PORT || 1000;

require('dotenv').config();



app.use(cors());
app.use(bodyParser.json);

const URL = process.env.MONGODB_URL;
mongoose.connect(URL,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})


const connection = mongoose.connection;
connection.once("open",() => {
    console.log("Mongodb Connection success!");
})

const memberRouter = require("./routes/member.js")

http://Localhost:1000/member
app.use("/member",memberRouter);


app.listen(PORT,() => 
    console.log(`Server is up and running on port number: ${PORT}`)
)


