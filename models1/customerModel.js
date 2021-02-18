var db1=require('../dbconnection1');
var customers={
    getAllCustomers:function(callback){
        return db1.query('select * from customer_tbl',callback);
    },
    addCustomer:function(data,callback){
        return db1.query('insert into customer_tbl values (?,?,?,?,?,?,?)',[null,data.customer_emailid,data.customer_password,data.customer_name,data.customer_gender,data.customer_mobileno,1],callback);
    },
    deleteCustomer:function(id,callback){
        return db1.query('delete from customer_tbl where customer_id=?',[id],callback);
    },
    editCustomer:function(data,callback){
        return db1.query('update customer_tbl set  customer_emailid=?,customer_password=?,customer_name=?,customer_gender=?,customer_mobileno=? where customer_id=?',[data.customer_emailid,data.customer_password,data.customer_name,data.customer_gender,data.customer_mobileno,data.customer_id],callback);
    },
    getCustomerById:function(id,callback){
        return db1.query('select * from customer_tbl where customer_id=?',[id],callback);
    },
   
};
module.exports=customers; 