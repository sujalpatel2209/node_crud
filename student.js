var bodyParser = require('body-parser');
var stud_model = require('./student_model');

var Datamodel = stud_model.stud_model();

var bodyparser = bodyParser.urlencoded({extended: false});

module.exports.stud = function (app) {

    /* Fetch All Record Detail */
    app.get('/', function (req, res) {
        Datamodel.find({}, function (err, data) {
            if (err) console.log(err);
            res.render('userlist', {'userdetaillist': data, 'title': 'UserList', 'tabletitle': 'User Detail List'});
        });
    });

    /* Fetch Single Record Detail */
    app.get('/fetchsingle/:id', function (req, res) {
        Datamodel.findOne({'_id': req.params.id}, function (err, data) {
            if (err) console.log(err);
            res.render('fetchuserdetail', {'userdetaillist': data, 'title': 'Update', 'message': 'User Update'});
        });
    });

    /* Show Add User Form */
    app.get('/useraddform', function (req, res) {
        res.render('userform', {'title': 'Add User Form', 'message': 'Registration Form'});
    });

    /* Add User Detail */
    app.post('/adddata', bodyparser, function (req, res) {
        new Datamodel({
            fname: req.body.fname,
            lname: req.body.lname,
            age: req.body.age
        }).save(function (err, data) {
            if (err) console.log(err);
        });
        res.redirect('/');
    });

    /* Delete User Detail */
    app.get('/delete/:id', function (req, res) {
        Datamodel.remove({'_id': req.params.id}, function (err, data) {
            if (err) throw (err);
            res.redirect('/');
        });
    });

    /* Update User Detail */
    app.post('/updatedata', bodyparser, function (req, res) {
        Datamodel.update({'_id': req.body.id}, {
            $set: {
                'fname': req.body.fname,
                'lname': req.body.lname,
                'age': req.body.age
            }
        }, function (err, data) {
            if (err) throw err;
        });
        res.redirect('/');
    });

    /* Update All Record */

    /*app.post('/updatedata', bodyparser, function (req, res) {
     Datamodel.update({'_id': req.body.id},req.body,function (err,data) {
     if (err) throw err;
     });
     res.redirect('/');
     });*/
}