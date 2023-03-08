var con = require('./mydb');
var mysql = require('mysql');

var adr = 'Mountain 21';
var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log(result);
});

// to use the mysql.escape you have to require mysql module in this file