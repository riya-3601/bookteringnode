var db=require('../dbconnection1');
var categories={

    getAllCategories:function(callback){
        return db.query('select * from category_tbl',callback);
    },
    addCategory:function(data,callback){
        return db.query('insert into category_tbl values (?,?,?)',[null,data.category_name,data.category_isactive],callback);
    },
    deleteCategory:function(id,callback){
        return db.query('delete from category_tbl where category_id=?',[id],callback);
    },
    editCategory:function(data,callback){
        return db.query('update category_tbl set category_name=?,category_isactive=? where category_id=?',[data.category_name,data.category_isactive,data.category_id],callback);
    },
    getCategoryById:function(id,callback){
        return db.query('select * from category_tbl where category_id=?',[id],callback);
    }
}; 
module.exports=categories;