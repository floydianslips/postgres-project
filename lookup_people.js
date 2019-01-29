const pg = require("pg");
const settings = require("./settings"); // settings.json
const args = process.argv.slice(2)[0];
const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});



client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  let query = "SELECT first_name, last_name FROM famous_people WHERE last_name=$1 OR first_name=$1";
  client.query(query, [args], (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    console.log(result.rows); //output: 1
    client.end();
  });
});

