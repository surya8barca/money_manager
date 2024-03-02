const db = require("./server");


exports.getTables = (req,res)=>{
    try{
        const query = "Select * from Table_Records;"
        db.query(query, (err,rows)=>{
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