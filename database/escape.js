var con = require('./mydb');

var name = 'Amy';
var adr = 'Mountain 21';
var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
con.query(sql, [name, adr], function (err, result) {
  if (err) throw err;
  console.log(result);
});

// make the variables, and then pass an array of those variables and 
// they will replace the ? in the query