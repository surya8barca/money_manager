const db = require("msnodesqlv8");

const conn = require("./config")


runQuery = async function(query) {
    if(query.trim().length !== 0)
    {
        console.log("hey");
        await db.query(conn.connectionString,query, (err,rows)=>{
            if(err)
            {
                console.log("error");
                console.log(err.message);
                return null;
            }
            else
            {
                console.log("success")
                return rows;
            }
        })
    }
}

module.exports = {
    runQuery:runQuery
};
