const app = require('express')();
const conn = require("./config");
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/api', require('./routes'));

app.listen(conn.port,()=>{
    console.log("express running on port: ",conn.port)
})