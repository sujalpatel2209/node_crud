var express = require('express');
var student = require('./student');

var app = express();


/* Set View Engine */
app.set('view engine', 'pug');

/* Set Static Folder */
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));


student.stud(app);

app.listen(3333);