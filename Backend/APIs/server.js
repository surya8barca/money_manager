const db = require("mysql2");

const config = require("./config")

const conn = db.createConnection(config.dbConfiguration);

conn.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL database:', err);
      return;
    }
    console.log('Connected to MySQL database');
  });
  

module.exports = conn;