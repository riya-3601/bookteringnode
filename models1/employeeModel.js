var db=require('../dbconnection1');
var employee={

    getAllemployee:function(callback) {
        return db.query('select * from employee_tbl',callback);
    },

    getemployeeById:function(id,callback){
        return db.query('select * from employee_tbl where employee_id=?',[id],callback);
    },

    addemployee:function(data,callback){
        return db.query('insert into employee_tbl values (?,?,?,?)',[null,data.employee_name,data.employee_mobileno,data.employee_password],callback);
    },

    deleteemployee:function(id,callback){
        return db.query('delete from employee_tbl where employee_id=?',[id],callback);
    },

    updateemployee:function(data,callback){
        return db.query('update employee_tbl set employee_name=?,employee_mobileno=?,employee_password=? where employee_id=?',[data.employee_name,data.employee_mobileno,data.employee_password,data.employee_id],callback);
    },
    getEmployeeDetails(employee_id,callback)
    {
        return db.query('select e.*,o.*,ed.*,a.*,c.* from employee_tbl e,order_tbl o,employeedelivery_tbl ed,addressbook_tbl a,customer_tbl c where o.order_id=e.fk_order_id and ed.delivery_id=e.fk_delivery_id and a.address_id=e.fk_address_id and c.customer_id=e.fk_customer_id and e.employee_id=?',[employee_id],callback);
    }
};
module.exports=employee;