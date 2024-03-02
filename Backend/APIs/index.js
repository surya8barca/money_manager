const app = require('express')();
const constants = require('./properties')
const conn = require("./config");
const bodyParser = require('body-parser');
const cors = require("cors");

app.use(cors({
    origin:constants.routeConstants.CORS_LINK
}))

app.use(bodyParser.json());

app.use('/api', require('./routes'));

app.listen(conn.port,()=>{
    console.log("express running on port: ",conn.port)
})

