const config = require("./knexfile");
const knex = require('knex')(config);
const args = process.argv.slice(2)[0];

knex
.select('first_name', 'last_name', 'birthdate')
.from('famous_people').
where('first_name', '=', args).
orWhere('last_name', '=', args)
.asCallback(function(err, rows){
  let rowData = rows[0];
  console.log("The famous person is: " + rowData.first_name + rowData.last_name + ", whose birthday is: " + rowData.birthdate.toString().slice(0, 15))
  knex.destroy();
  // rows.forEach()
});
