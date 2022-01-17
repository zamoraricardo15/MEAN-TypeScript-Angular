const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ useNewUrlParser: true }));

app.use(bodyParser.json());

app.use(express.static( __dirname + '/public/dist/public' ));



app.all("*", (req,res,next) => {

  res.sendFile(path.resolve("./public/dist/public/index.html"))

});


app.listen(8080, 
  () => console.log("listening on port 8080"));