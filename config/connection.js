// Connect Node to MySQL.
const mysql = require("mysql");
let connection;
//make connection
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    port: 3306,
    host: "a5s42n4idx9husyc.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "zcbqe1at0gw2k4cq",
    password: "p61fys31847rliqp",
    database: "ug1cieutv766cjpe"
  });
}
connection.connect();
// Export connection for our ORM to use.
module.exports = connection;