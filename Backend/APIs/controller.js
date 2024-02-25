const conn = require("./config");
const db = require("msnodesqlv8");


exports.getExpenses = (req,res)=>{
    try{
        const query = "Select * from Expense_Tracker;"
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