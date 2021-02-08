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
    }

};
module.exports=employee;