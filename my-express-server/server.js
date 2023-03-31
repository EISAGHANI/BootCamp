const express = require('express');

const app = express();

app.get('/', function(request, response){
    response.send('<h1> This is Heading </h1>');
})
app.get("/contact", function(req, res){
    res.send("Contact us on WhatsApp please")
})
app.get("/about", function(req, res){
    res.send("<h1>My Name is Eisa</h1> ")
})
app.get("/hobbies", function(req, res){
    res.send("<h1>I don't have any</h1> ")
})

app.listen(3000, function(){
    console.log('The Server is running on port 3000.')
});
