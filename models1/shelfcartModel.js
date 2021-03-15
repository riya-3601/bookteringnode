var db=require('../dbconnection1');
var shelfcart={
    getcart:function(callback){
        return db.query('select sc.*,bfs.* from shelfcart_tbl sc,bookforsale_tbl bfs where bfs.book_id=sc.fk_book_id and shelfcart_status="in cart"',callback);
    },
    getshelf:function(callback){
        return db.query('select sc.*,bfs.* from shelfcart_tbl sc,bookforsale_tbl bfs where bfs.book_id=sc.fk_book_id and shelfcart_status="in shelf"',callback);
    },
    

    addincart:function(data,input,callback){
        return db.query('insert into shelfcart_tbl values (?,?,?,?,?)',[null,input,'in cart',data.book_id,125],callback);
    },
    addinshelf:function(data,callback){
        return db.query('insert into shelfcart_tbl values (?,?,?,?,?)',[null,1,'in shelf',data.book_id,125],callback);
    },
    

}
module.exports=shelfcart;