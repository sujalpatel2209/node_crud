module.exports.stud_model = function () {
    var mongodb = require('mongoose');

    /* connect mongodb database */
    mongodb.connect('mongodb://sujalpatel:sujalpatel@ds145148.mlab.com:45148/node_demo');

    /* Create Table Schema */
    var DataSchema = new mongodb.Schema({
        fname: String,
        lname: String,
        age: Number
    });

    var Datamodel = mongodb.model("user", DataSchema);
    return Datamodel;
}
