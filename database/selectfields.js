var con = require('./mydb');

con.query("SELECT name, address FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(fields);
    console.log(fields[1].name);
    //for example, take the name from the second field
  });