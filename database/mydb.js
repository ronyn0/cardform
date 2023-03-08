var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "ron",
    password: "alligator",
    port: '/var/run/mysqld/mysqld.sock',    
    database: "mydb"
  });

  connection.connect(function(err) {
    if (err) throw err;
    // console.log("Connected!"); testing the connection
});
module.exports = connection;