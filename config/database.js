import mysql from "mysql";

const connection = mysql.createConnection({
  multipleStatements: true,
  host: "localhost",
  user: "root",
  password: "dNDnHMnRL5HI3ThM",
  database: "web_wat"
});
export default connection;
