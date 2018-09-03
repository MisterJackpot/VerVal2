var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "senha",
  database: "rastreamento"
});

export default con;