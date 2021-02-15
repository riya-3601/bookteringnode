var db=require('../dbconnection');
var categories={

    getAllCategories:function(callback){
        return db.query('select * from category_tbl',callback);
    },
    addCategory:function(data,callback){
        return db.query('insert into category_tbl values (?,?,?)',[null,data.cat_name,data.cat_isactive],callback);
    },
    deleteCategory:function(id,callback){
        return db.query('delete from category_tbl where cat_id=?',[id],callback);
    },
    editCategory:function(data,callback){
        return db.query('update category_tbl set cat_name=?,cat_isactive=? where cat_id=?',[data.cat_name,data.cat_isactive,data.cat_id],callback);
    },
    getCategoryById:function(id,callback){
        return db.query('select * from category_tbl where cat_id=?',[id],callback);
    }
}; 
module.exports=categories;