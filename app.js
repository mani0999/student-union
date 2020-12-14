const express = require('express');
const app =express();
var path = require("path");

app.get("/", function (request, response){
    //show this file when the "/" is requested
    response.sendFile(__dirname+"/views/index.html");
});

app.get("/enroll", function (request, response){
    //show this file when the "/" is requested
    response.sendFile(__dirname+"/views/enroll.html");
});


app.get("/list", function (request, response){
    //show this file when the "/" is requested
    response.sendFile(__dirname+"/views/list.html");
});

app.listen(8081);


