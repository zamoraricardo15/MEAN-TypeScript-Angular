const express = require('express');

var app = new express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());


app.use(express.static( __dirname + '/public/dist/public' ));

app.listen(8080, () => console.log('Listening on port 8080'));
