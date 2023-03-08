var con = require('./mydb');

  var sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted, ID: " + result.insertId);
  });

/* the insert id is the auto-increment id in mysql of the item you 
just inserted. very useful feature
this uses mydb.js, which means you don't have to connect again
you can get right into sql queries */