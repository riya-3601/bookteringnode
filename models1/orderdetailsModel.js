var db=require('../dbconnection1');
var orderdetails={

    getAllorderdetails:function(callback) {
        //return db.query('select * from orderdetails_tbl',callback);
        return db.query('select od.*,o.*,bs.* from orderdetails_tbl od,order_tbl o,bookforsale_tbl bs where o.order_id=od.fk_order_id and bs.book_id=od.fk_book_id',callback);
    },

    getorderdetailsById:function(id,callback){
        return db.query('select * from orderdetails_tbl where orderdetails_id=?',[id],callback);
    },

    addorderdetails:function(data,callback){
        return db.query('insert into orderdetails_tbl values (?,?,?,?)',[null,data.orderdetails_quantity,data.fk_order_id,data.fk_book_id],callback);
    },

    deleteorderdetails:function(id,callback){
        return db.query('delete from orderdetails_tbl where orderdetails_id=?',[id],callback);
    },

    updateorderdetails:function(data,callback){
        return db.query('update orderdetails_tbl set orderdetails_quantity=?,fk_order_id=?,fk_book_id=? where orderdetails_id=?',[data.orderdetails_quantity,data.fk_order_id,data.fk_book_id,data.orderdetails_id],callback);
    }

};
module.exports=orderdetails;