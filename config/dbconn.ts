var mysql = require('mysql');

var con:any = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Piyush@329",
  database: "carebook"

});

con.connect(function(err:any) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports={con}