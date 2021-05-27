var db=require('../dbconnection1');
var sam={
    addCategory:function(callback){
  var values = [
    [null,'scifi', 'abc', 'True'],
    [null,'romcom', 'abc', 'False'],
];
        return db.query('insert into category_tbl(category_id,category_name,category_image,category_isactive) values ?',[values],callback);
    }
};
module.exports=sam; 