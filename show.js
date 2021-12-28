const { Client } = require("pg");
const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "terminator_t",
    database: "rishandb"
});
client.connect();
client.query('select * from students', function (err, res) {
    if (err) {
        console.log(err);
    } else {
        console.log(res.rows);
    }
});
