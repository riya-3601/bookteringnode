var db=require('../dbconnection1');
var orderdetails={

    getAllorderdetails:function(id,callback) {
        //return db.query('select * from orderdetails_tbl',callback);
        return db.query('select od.*,o.*,bs.*,e.*,ed.*,c.* from orderdetails_tbl od,order_tbl o,bookforsale_tbl bs,customer_tbl c,employee_tbl e,employeedelivery_tbl ed where o.order_id=od.fk_order_id and o.order_id=ed.fk_order_id and e.employee_id=ed.fk_employee_id and bs.book_id=od.fk_book_id and c.customer_id=o.fk_customer_id and od.fk_order_id=?',[id],callback);
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
    ,
    getOrderDetailsByOrderId:function(order_id,callback){

            return db.query('select od.*,o.*,b.* from orderdetails_tbl od,order_tbl o,bookforsale_tbl b where od.fk_order_id=o.order_id and od.fk_book_id=b.book_id and o.order_id=?',[order_id],callback);
    },
    addorderdetails1:function(data,order_id,callback){
       
        var values=[];      
        for(var i=0;i<data.length;i++){
          values[i]=[null,data[i].shelfcart_quantity,order_id,data[i].book_id];
        }
        
        return db.query("insert into orderdetails_tbl(orderdetails_id,orderdetails_quantity,fk_order_id,fk_book_id) Values ?",[values],callback);
    }
};
module.exports=orderdetails;