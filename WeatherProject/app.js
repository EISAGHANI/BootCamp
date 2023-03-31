const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const https = require('https');
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
    const querry = req.body.cityName;
    const key = "32d8055bf130ac9f15e9cfc8dffbcd49"
    const unit = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?units=" + unit + "&q=" + querry + "&APPID="+ key;

    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const weatherDescription = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const imageURL = "http://openweathermap.org/img/wn/" + icon +"@2x.png"
            
            res.write("<h1>The temperature in the " + querry +  " City is " + temp + " degrees celcius</h1>")
            res.write("<p>The Weather description is currently " + weatherDescription + "<p>")
            res.write("<img src =" + imageURL + ">")
            res.send()
        })
    })
})




app.listen(5000, function(){
    console.log('The server is running on 5000');
})
