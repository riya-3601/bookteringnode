var db1=require('../dbconnection1');
var login={
    addadmin:function(data,callback){
        return db1.query('select * from customer_tbl where customer_emailid=? and customer_password=?',[data.login_username,data.login_password],callback);  
      },
};
module.exports=login;  