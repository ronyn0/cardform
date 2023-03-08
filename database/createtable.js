var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "ron",
    password: "alligator",
    port: '/var/run/mysqld/mysqld.sock',
    database: "mydb"
    // now we can specify our database we made
    // mariadb was listening on the unix socket, the default is a tcp
    // so you gotta specify the port
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  }); 