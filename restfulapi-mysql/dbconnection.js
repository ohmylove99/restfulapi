var mysql=require('mysql');
var connection=mysql.createPool({

host:'localhost',
user:'staffdb',
password:'staffdb',
database:'staffdb'


});
module.exports=connection;