var http = require('http');
var fs = require('fs');
var custom = require('./custom_model');
var express = require('express');

var app = express();

var cnt = custom.cntFunction();

console.log(cnt);

http.createServer(function(req,res){
   res.writeHead(200,{'content-type':'text/plain'});

   res.end(custom.str);

 /*  fs.readFile('./DemoFiles/readFile.txt','utf8',function (err,data) {
        if(err) throw err;
     //   var no = custom.cnt();
        res.end(data);
       // fs.writeFile('./DemoFiles/writeFile.txt',custom.str);
   });*/
}).listen(2209,"127.0.0.1");

console.log("Server Start IP: 127.0.0.1 PORT : 2209");