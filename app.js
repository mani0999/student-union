const express = require('express');
const app =express();
var path = require("path");

app.get("/", function (request, response){
    response.sendFile(__dirname+"/views/index.html");
});

app.get("/enroll", function (request, response){
    response.sendFile(__dirname+"/views/enroll.html");
});


app.get("/list", function (request, response){
    response.sendFile(__dirname+"/views/list.html");
});

app.get("/message", function (request, response){
    response.sendFile(__dirname+"/views/message.html");
})

app.listen(8081);


