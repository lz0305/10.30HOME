var express = require('express');
var router = express.Router();
var mysql=require("mysql");
var con=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:"lizhen"
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin","*");
    con.query("SELECT data,title,id FROM news",function (err, rows, fields) {
        res.send(rows)

    })
});

router.post('/look', function(req, res, next) {
    res.header("Access-Control-Allow-Origin","*");
    var aa = req.body.a
    console.log(req.body.a);
    con.query("SELECT title,message,data FROM news WHERE id="+aa,function (err, rows, fields) {
        res.send(rows)

    })
});

module.exports = router;
