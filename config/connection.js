// Set up MySQL connection.
var mysql = require("mysql");
var connection;
if (process.env.JAWSB_URL){
  connection = mysql.createConnection(process.env.JAWSB_URL);

}else{
  connection=mysql.createConnection({
    host:'z12itfj4c1vgopf8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user:'cy2xyb052ewt45d9',
    password:'m3etiiqerjhn8nqx',
    database:'i9rdg5csrn5ogsmd'

  });
};
connection.connect();

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "1Qaz@wsx",
//   database: "burger_db"
// });

// Make connection.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// // Export connection for our ORM to use.
module.exports = connection;
