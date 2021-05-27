var db=require('../dbconnection1');
var employeedelivery={

    getAllemployeedelivery:function(callback) {
      //  return db.query('select * from employeedelivery_tbl',callback);
      return db.query('select e.*,o.*,ed.* from employee_tbl e,order_tbl o,employeedelivery_tbl ed where e.employee_id=ed.fk_employee_id and o.order_id=ed.fk_order_id ',callback);
    },

    getemployeedeliveryById:function(id,callback){
        return db.query('select * from employeedelivery_tbl where delivery_id=?',[id],callback);
    },

    addemployeedelivery:function(data,callback){
        return db.query('insert into employeedelivery_tbl values (?,?,?,?)',[null,data.delivery_status,data.fk_employee_id,data.fk_order_id],callback);
    }, 

    deleteemployeedelivery:function(id,callback){
        return db.query('delete from employeedelivery_tbl where delivery_id=?',[id],callback);
    },

    updateemployeedelivery:function(data,callback){
        return db.query('update employeedelivery_tbl set delivery_status=?,fk_employee_id=?,fk_order_id=? where delivery_id=?',[data.delivery_status,data.fk_employee_id,data.fk_order_id,data.delivery_id],callback);
    },
    getEmployeeDeliveryByEmployeeId(employee_id,callback)
    {
        return db.query('select e.*,o.*,ed.*,c.*,a.* from employee_tbl e,order_tbl o,employeedelivery_tbl ed,customer_tbl c,addressbook_tbl a where o.order_id=ed.fk_order_id and e.employee_id=ed.fk_employee_id and c.customer_id=o.fk_customer_id and a.address_id=o.fk_address_id and e.employee_id=? and ed.delivery_status!=?',[employee_id,'Delivered'],callback);
    },
    

};
module.exports=employeedelivery;