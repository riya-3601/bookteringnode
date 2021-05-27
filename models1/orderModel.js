var db = require("../dbconnection1");
var orders = {
  getAllOrders: function (callback) {
    return db.query(
      "select o.*,c.* from order_tbl o,customer_tbl c where c.customer_id=o.fk_customer_id and o.order_status=? order by order_date DESC ",
      ["Placed"],
      callback
    );
  },
  addOrder: function (data, callback) {
    return db.query(
      "insert into order_tbl values (?,?,?,?,?,?,?)",
      [
        null,
        data.order_date,
        'Placed',
        data.order_paymenttype,
        data.order_totalamount,
        data.fk_customer_id,
        data.fk_address_id
      ],
      callback
    );
  },
  deleteOrder: function (id, callback) {
    return db.query("delete from order_tbl where order_id=?", [id], callback);
  },
  editOrder: function (data, callback) {
    return db.query(
      "update order_tbl set order_date=?,order_status=?,order_paymenttype=?,order_totalamount=?,fk_customer_id=? where order_id=?",
      [
        data.order_date,
        'Confirmed',
        data.order_paymenttype,
        data.order_totalamount,
        data.fk_customer_id,
        data.order_id,
      ],
      callback
    );
  },
  getOrderById: function (id, callback) {
    return db.query("select * from order_tbl where order_id=?", [id], callback);
  },
  getOrderbyCustomerId: function (data, callback) {
    return db.query(
      "select o.*,c.* from order_tbl o,customer_tbl c where c.customer_id=o.fk_customer_id and o.order_id=?",
      [data.order_id],
      callback
    );
  },
  editOrderForStatusChange: function (data, callback) {
    return db.query(
      "update order_tbl set order_date=?,order_status=?,order_paymenttype=?,order_totalamount=?,fk_customer_id=? where order_id=?",
      [
        data.order_date,
        'Confirmed',
        data.order_paymenttype,
        data.order_totalamount,
        data.fk_customer_id,
        data.order_id,
      ],
      callback
    );
  },
  getMyOrders:function(id,callback){
    return db.query("select o.*,c.*,a.*,ed.*,e.* from employee_tbl e,order_tbl o,employeedelivery_tbl ed,customer_tbl c,addressbook_tbl a where e.employee_id=ed.fk_employee_id and c.customer_id=o.fk_customer_id and a.address_id=o.fk_address_id and o.order_id=ed.fk_order_id and o.fk_customer_id=?",[id],callback);
    // select o.*,c.*,od.*,e.*,ed.*,b.*,a.* from bookforsale_tbl b,addressbook_tbl a,employee_tbl e,employeedelivery_tbl ed,order_tbl o,customer_tbl c, orderdetails_tbl od where c.customer_id=o.fk_customer_id and a.address_id=o.fk_address_id and o.order_id=od.fk_order_id and b.book_id=od.fk_book_id and e.employee_id=ed.fk_employee_id and o.order_id=ed.fk_order_id and c.customer_id=a.fk_customer_id and o.fk_customer_id=?
  },
  editOrderDelivered:function(id,callback){
    return db.query('update order_tbl set order_status=? where order_id=?',['Delivered',id],callback);
  },
  getAllOrdersAdmin:function(callback){
    return db.query('select o.*,c.*,a.* from order_tbl o,customer_tbl c,addressbook_tbl a where c.customer_id=o.fk_customer_id and a.address_id=o.fk_address_id and o.order_status="Confirmed"',callback);
  }
};
module.exports = orders;
