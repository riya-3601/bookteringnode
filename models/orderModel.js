var db=require('../dbconnection');
var orders={
    getAllOrders:function(callback){
        return db.query('select * from order_tbl',callback);
    },
    addOrder:function(data,callback){
        return db.query('insert into order_tbl values (?,?,?,?)',[null,data.order_date,data.order_status,data.order_paytype],callback);
    },
    deleteOrder:function(id,callback){
        return db.query('delete from order_tbl where order_id=?',[id],callback);
    },
    editOrder:function(data,callback){
        return db.query('update order_tbl set order_date=?,order_status=?,order_paytype=? where order_id=?',[data.order_date,data.order_status,data.order_paytype,data.order_id],callback);
    },
    getOrderById:function(id,callback){
        return db.query('select * from order_tbl where order_id=?',[id],callback);
    }
};
module.exports=orders;