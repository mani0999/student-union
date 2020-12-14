const express = require('express');
const app =express();
var path = require("path");

app.get("/", function (request, response){
    //show this file when the "/" is requested
    response.sendFile(__dirname+"/views/index.html");
});
app.listen(8081);


