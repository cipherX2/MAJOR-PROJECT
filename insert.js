const client = require("./config");
client.connect();
client.query("insert into students values(3,'David Bombal',7000123341,'david@reddit.co.in','CCNA 200-301')", function (err, res) {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully Inserted....");
    }
});
