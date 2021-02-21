var db = require("../dbconnection1");
var employee = {
    getAllOrders: function (callback) {
        return db.query(
          "select o.*,c.* from order_tbl o,customer_tbl c where c.customer_id=o.fk_customer_id and o.order_status=? order by order_date DESC ",
          ["Confirmed"],
          callback
        );
      },
}
module.exports=employee;