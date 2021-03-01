var http = require("http");
var fs = require("fs");
var port = 3000;

http.createServer(
    function(req,res){
        //console.log(req);
        //res.end("Hello from Node Js ")
        fs.readFile("./public"+ req.url,function(err,data){
            if(err){
                console.log("Error while reading file");
                res.writeHead(404,{"content-type":"text/html"})
                res.end("404 Error file");
            }
            else{
                res.end(data);
            }

        })
    }
).listen(port,()=>{
    console.log("Server Start at Port "+ port)
});