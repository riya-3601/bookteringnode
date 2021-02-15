var db=require('../dbconnection1');
var orders={
    getAllOrders:function(callback){
        return db.query('select o.*,c.* from order_tbl o,customer_tbl c where c.customer_id=o.fk_customer_id',callback);
    },
    addOrder:function(data,callback){
        return db.query('insert into order_tbl values (?,?,?,?,?,?)',[null,data.order_date,data.order_status,data.order_paymenttype,data.order_totalamount,data.fk_customer_id],callback);
    },
    deleteOrder:function(id,callback){
        return db.query('delete from order_tbl where order_id=?',[id],callback);
    },
    editOrder:function(data,callback){
        return db.query('update order_tbl set order_date=?,order_status=?,order_paymenttype=?,order_totalamount=?,fk_customer_id=? where order_id=?',[data.order_date,data.order_status,data.order_paymenttype,data.order_totalamount,data.fk_customer_id,data.order_id],callback);
    },
    getOrderById:function(id,callback){
        return db.query('select * from order_tbl where order_id=?',[id],callback);
    },
    getOrderbyCustomerId:function(data,callback){
        return db.query('select o.*,c.* from order_tbl o,customer_tbl c where c.customer_id=o.fk_customer_id and o.order_id=?',[data.order_id],callback);
    } 
};
module.exports=orders;  