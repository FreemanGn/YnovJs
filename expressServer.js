var express = require("express");
var app = express();

var bodyParser = require("body-parser");

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));

app.get("/test",function(req,res){
    res.send("Hello From Noje JS Express")
})

app.post("/testPost",function(req,res){
    console.log(req);
    res.send("Test post succes" + req.body.test);
})

app.get("/",function(req,res){
    res.sendFile("index.html")
}
)

app.listen(3000, 
    ()=>{
            console.log("Console start at port 3000");
        }
)