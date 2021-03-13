var db=require('../dbconnection1');
var shelfcart={

    addincart:function(data,callback){
        return db.query('insert into shelfcart_tbl values (?,?,?,?,?)',[null,1,'in cart',data.book_id,125],callback);
    },

}
module.exports=shelfcart