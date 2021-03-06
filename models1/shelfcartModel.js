var db=require('../dbconnection1');
var shelfcart={
    getcart:function(id,callback){
        return db.query('select sc.*,bfs.*,c.* from shelfcart_tbl sc,bookforsale_tbl bfs,customer_tbl c where bfs.book_id=sc.fk_book_id and c.customer_id=sc.fk_customer_id and shelfcart_status="in cart" and sc.fk_customer_id=?',[id],callback);
    },
    getshelf:function(id,callback){
        return db.query('select sc.*,bfs.* from shelfcart_tbl sc,bookforsale_tbl bfs where bfs.book_id=sc.fk_book_id and shelfcart_status="in shelf" and sc.fk_customer_id=?',[id],callback);
    },
    

    addincart:function(data,id,input,callback){
        console.log(input);
        return db.query('insert into shelfcart_tbl values (?,?,?,?,?)',[null,input,'in cart',data.book_id,id],callback);
    },
    addinshelf:function(data,id,callback){
        return db.query('insert into shelfcart_tbl values (?,?,?,?,?)',[null,1,'in shelf',data.book_id,id],callback);
    },
    onAddCartfromShelf:function(data,callback){
        return db.query('update shelfcart_tbl set shelfcart_quantity=?,shelfcart_status=?,fk_book_id=?,fk_customer_id=? where shelfcart_id=?',[data.shelfcart_quantity,'in cart',data.fk_book_id,data.fk_customer_id,data.shelfcart_id],callback);
    },
    deleteFromCart:function(id,callback){
        return db.query('delete from shelfcart_tbl where shelfcart_id=?',[id],callback);
    },
    deleteFromShelf:function(id,callback){
        return db.query('delete from shelfcart_tbl where shelfcart_id=?',[id],callback);
    },
    multipledeleteFromCart:function(data,callback){
        //console.log('from multiple delete',data);
        var delarr=[];
        for(i=0;i<data.length;i++){
         
        delarr[i]=data[i].shelfcart_id;
        }
        //console.log('Values:',delarr)
         return db.query("delete from shelfcart_tbl where shelfcart_id in (?)",[delarr],callback);
    },
    getcartByCartid:function(book_id,customer_id,callback){
        return db.query('select * from shelfcart_tbl where fk_book_id=? and fk_customer_id=? and shelfcart_status="in cart"',[book_id,customer_id],callback);
    }
}
module.exports=shelfcart;