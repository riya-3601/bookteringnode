var db1=require('../dbconnection');
var customers={
    getAllCustomers:function(callback){
        return db1.query('select * from customer_tbl',callback);
    },
    addCustomer:function(data,callback){
        return db1.query('insert into customer_tbl values (?,?,?,?)',[null,data.customer_name,data.customer_gen,data.customer_mob],callback);
    },
    deleteCustomer:function(id,callback){
        return db1.query('delete from customer_tbl where customer_id=?',[id],callback);
    },
    editCustomer:function(data,callback){
        return db1.query('update customer_tbl set customer_name=?,customer_gen=?,customer_mob=? where customer_id=?',[data.customer_name,data.customer_gen,data.customer_mob,data.customer_id],callback);
    },
    getCustomerById:function(id,callback){
        return db1.query('select * from customer_tbl where customer_id=?',[id],callback);
    }
};
module.exports=customers;