// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/jungle.sqlite3' //This gets created automatically
    },
    useNullAsDefault: true
  },
  production: {
    client: 'mysql',
    connection: {
      host:'localhost',
      database: 'lambda',// This has to be created manually
      user:     'jaspinder',
      password: 'pass'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
