const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");


const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
   const firstName = req.body.fName;
   const lastName = req.body.lName;
   const email = req.body.email;

   const data = {
    members: [
        {
            email_address: email,
            staus: "subscribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName
            }
        }
    ]
   };

   const jsonData = JSON.stringify(data);

   const url = "https://us1.api.mailchimp.com/3.0/lists/5983f6d4aa"

   const options = {
    method: "POST",
    auth: "Eisa:6732d3c2a075bf319d870c96d79003e6-us1"
   }

   const request = https.request(url, options, function(response){
        response.on("data", function(data){
            console.log(JSON.parse(data)); 
        })
   })

   request.write(jsonData);
   request.end();
});

app.listen(3000, function(){
    console.log("The server is up on 3000");
})


// API Key
// 6732d3c2a075bf319d870c96d79003e6-us1
// list ID
// 5983f6d4aa