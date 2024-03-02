const conn = require("./config");
const db = require("msnodesqlv8");


exports.getTables = (req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    try{
        const query = "Select * from Table_Records;"
        db.query(conn.connectionString,query, (err,rows)=>{
            if(err)
            {
                res.status(500).json({ error: err.message });
            }
            else
            {
                res.json(rows);
            }
        })
    }
    catch(error)
    {
        res.status(500).json({ error: error.message });
    }
}