var db = require("../dbconnection1");
const orders = require("./orderModel");
var employee = {
    getAllOrders: function (callback) {
        return db.query(
          "select o.*,c.* from order_tbl o,customer_tbl c where c.customer_id=o.fk_customer_id and o.order_status=? order by order_date DESC ",
          ["Confirmed"],
          callback
        );
      },
      addempDelivery:function(data,callback){
       
        console.log(data);
        var orders=[];
        var emp;
        
        for(var i=0;i<data.orddata.length;i++){
          orders[i]=data.orddata[i].order_id;
        }
        // for(var i=0;i<data.length;i++){
        //   emp[i]=data.employee_id;
        // }
        emp=data.employee_id;
        console.log(orders,emp);
        //console.log(data.employee_id);
        console.log(orders.length);
        for(var i=0;i<orders.length;i++)
        {
         return db.query("insert into employeedelivery_tbl Values (?,?,?,?)",[null,"Confirmed",emp,orders[i]],callback);
        }
        
      }
}
module.exports=employee;