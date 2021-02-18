var db1=require('../dbconnection1');
var login={
    addadmin:function(data,callback){
        return db1.query('select * from customer_tbl where customer_emailid=? and customer_password=? and customer_type=?',[data.login_username,data.login_password,0],callback);  
      }
};
module.exports=login;  