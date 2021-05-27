var db = require("../dbconnection1");
const orders = require("./orderModel");
var employee = {
    getAllOrders: function (callback) {
        return db.query(
          "select o.*,c.* from order_tbl o,customer_tbl c where c.customer_id=o.fk_customer_id and o.order_status=? and o.order_id NOT IN (SELECT fk_order_id from employeedelivery_tbl) order by order_date DESC",
          ["Confirmed"],
          callback
        );
      },
      addempDelivery:function(data,callback){
       
        
        var values=[];      
        for(var i=0;i<data.orddata.length;i++){
          values[i]=[null,'Assigned',data.employee_id,data.orddata[i].order_id];
        }
        
        return db.query("insert into employeedelivery_tbl(delivery_id,delivery_status,fk_employee_id,fk_order_id) Values ?",[values],callback);
      }
      
}
module.exports=employee;