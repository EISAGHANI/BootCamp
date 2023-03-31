const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));



app.get('/', function(request,response){
    response.sendFile(__dirname + "/index.html");
})
app.post('/', function(req,res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;


    res.send("Your result is " + result);
})
app.get('/bmicalculator', function(req,res){
    res.sendFile(__dirname + '/bmiCalculator.html');
})
app.post('/bmicalculator', function(req,res){
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);

    var bmi = weight/(height * height);

    res.send("<h1>Your BMI is</h1> " + bmi);
})

app.listen(4000, function(){
    console.log("The server is running on 4000.")
});