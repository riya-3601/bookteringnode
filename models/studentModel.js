var db=require('../dbconnection');
var student={
    getAllStudent:function(callback){
        return db.query('select * from student_tbl',callback);
    }
};
module.exports=student;