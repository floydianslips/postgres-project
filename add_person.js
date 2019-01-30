const config = require("./knexfile");
const knex = require('knex')(config);


knex('famous_people').insert({first_name: 'Roger', last_name: 'Waters', birthdate: '1943-09-06'}).then(function(res) {
  console.log('added')
});
