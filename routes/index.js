var express = require('express');
var ko = require('knockout')
var router = express.Router();

/* GET home page. */
router.get('/sample', function(req, res, next) {
    res.render('sample', { title: 'Express2' });
});

router.get('/form', function(req, res, next) {
    res.sendfile('views/form.html');
});

/**
 * Created by dhruv on 4/10/16.
 */

console.log('Connecting to DB : ');

var mysql = require('mysql');

var connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'user',
    }
);

connection.connect();

//var query = connection.query('SELECT * FROM user');

//query.on('error', function(err) {
//  throw err;
//});
//
//query.on('fields', function(fields) {
//  console.log(fields);
//});

//query.on('result', function(row) {
//  console.log("Priting Ids:")
//  console.log(row.User_ID);
//});

//query.on('result', function(row) {
//  connection.pause();
//  // Do some more processing on the row
//  console.log(row);
//  connection.resume();
//});

router.get("/", function (req, res, next) {

    //connection.query('SELECT * from user',function (err,results,fields){
    //
    //  console.log(results.User_ID);
    //
    //  res.render('index',{
    //    title: results[0].title,
    //    users: results });
    //
    //});

    //query.on('result', function(row) {
    //  console.log("Priting Ids:")
    //  console.log(row.User_ID);
    //
    //  res.render('index',{
    //    title: results[0].title,
    //    users: results });
    //});

    var query = 'SELECT * FROM trafficflow';
    //res.render('index', {title: 'Express'});

    connection.query(query, function (err, rows, fields) {
        if (err) throw err;
        res.render('index', {title: 'Index page', 'items': rows});
        connection.end();
    });


connection.query(query, function(err, rows, fields) {
  if (err) throw err;
  res.render('index', {title: 'Teseting Node.js', 'items': rows, 'fields': fields});
});

})
;


router.post("/sample",function (req,res){
    var email = req.body.email;
    var userID = req.body.userName;
    var password = req.body.password;

    connection.query('SELECT First_Name FROM user WHERE User_ID = (?)', [userID], function(err, row) {
        if (err) res.json(err);
        //res.redirect('/'+email);
        console.log(row.First_Name);
    });
    console.log(email+" user "+userID);
});

router.post("/form2",function (req,res){

    //var email = req.body.email;

    var userName = req.body.name;

    //var password = req.body.description;

    //connection.query('INSERT INTO user_info (email, username, password) VALUES (?,
    //
    //    ?, ?)', [email, userName, password], function(err, results) {
    //
    //if (err) res.json(err);
    //
    //res.redirect('/'+email);

    console.log(" user "+userName);
});

router.post("/tasks",function (req,res){

    //var email = req.body.email;

    var userName = req.body.firstName;

    //var time1 = req.body.some_class_1;
    //
    //    console.log("time "+time1);

    //var password = req.body.description;

    //connection.query('INSERT INTO user_info (email, username, password) VALUES (?,
    //
    //    ?, ?)', [email, userName, password], function(err, results) {
    //
    //if (err) res.json(err);
    //
    //res.redirect('/'+email);

    //var json1 = JSON.parse(req.body);

    console.log(" user "+userName);

    var obj = {'key':'value'};


    var jsonContent = JSON.parse(JSON.stringify(obj));
    console.log("User Name:", jsonContent.key);

    //res.json({title: 'Index page', 'items': '6'});

    res.render('index', {title: 'Index page', 'items': '6'});

});

module.exports = router;
