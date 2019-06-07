const { password } = require('../src/.env')

module.exports = {
  username: 'postgres',  
  database: 'postgres',
  host: '127.0.0.1',
  dialect: 'postgres',
  password
}
