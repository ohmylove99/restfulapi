var mysql = require('mysql');
var config = require('config');
var dbConfig = config.get('dbConfig');
var connection = mysql.createPool({
	host:dbConfig.host,
	user:'staffdb',
	password:'staffdb',
	database:dbConfig.dbName
});
module.exports=connection;