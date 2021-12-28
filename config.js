const { Client } = require("pg");
const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "terminator_t",
    database: "rishandb"
});
module.exports = client;
