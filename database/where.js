var con = require('./mydb');

con.query("SELECT * FROM customers WHERE address LIKE 'S%'", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
// Use the '%' wildcard to represent zero, one or multiple characters
// for example, get all the addresses that start with S