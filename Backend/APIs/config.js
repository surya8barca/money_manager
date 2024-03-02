const connectionString = "Server=JR;Database=Money_Analyst;Trusted_connection=Yes;Driver={SQL Server}";
const port = 8080;
const dbConfiguration = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'money_analyst'
  }

module.exports={
    connectionString:connectionString,
    port:port,
    dbConfiguration:dbConfiguration
}