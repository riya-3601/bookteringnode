var mysql=require('mysql');
var connection=mysql.createPool({

    user:'root',
    password:'',
    database:'booktering',
    host:'localhost'
});
module.exports=connection;
