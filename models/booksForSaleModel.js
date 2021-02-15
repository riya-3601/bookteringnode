var db=require('../dbconnection');
var bfs={
    getAllBooks:function(callback){
        return db.query('select * from booksforsale_tbl',callback);
    }
}
module.exports=bfs;