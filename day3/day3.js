const express = require('express');
const app = express();
const port = 3000;
const array = ["Hello", "No sir!"];
app.get("/", function(request, response){
	response.send("Hello, world!");
	console.log("Okay, this is working!");
});

app.get("/ID/:id", function(request, response){

let param = request.params.id;

response.send(array[param]);
console.log("/id is good");
});

app.listen(port, function(){
	console.log(`The app is  on port ${port}`);
});
