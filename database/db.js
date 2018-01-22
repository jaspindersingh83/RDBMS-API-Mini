const config = require('../knexfile.js');
const knex= require('knex')(config.development);
//knex(config.development);

module.exports = knex;