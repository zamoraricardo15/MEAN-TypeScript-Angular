const express = require('express'),
    path = require('path'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/authors', {useNewUrlParser: true});


const flash = require('express-flash');

app.use(flash());

const session = require('express-session');

app.use(session({

    secret: 'mysecret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }

}))


app.use(bodyParser.urlencoded({extended: true})); 
app.use(express.json());

app.use(express.static(__dirname + "/public/dist/public"));

app.set('view engine', 'ejs');


require('./server/config/routes.js')(app);

app.listen(8080, () => {

    console.log("Listening on port 8080")
    
});
