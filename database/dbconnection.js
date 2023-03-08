var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "ron",
  password: "alligator",
  port: '/var/run/mysqld/mysqld.sock'
  // mariadb was listening on the unix socket, the default is a tcp
  // so you gotta specify the port
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

/* 
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
  });
}); 

example of a connect function that runs a query
*/