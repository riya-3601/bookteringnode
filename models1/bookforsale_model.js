var db=require('../dbconnection1');
var bfs={
    getAllBooks:function(callback){
        return db.query('select b.*,c.* from bookforsale_tbl b,category_tbl c where c.category_id=b.fk_category_id',callback);
    },
    addBookforsale:function(data,filename,callback){
        return db.query('insert into bookforsale_tbl values (?,?,?,?,?,?,?,?,?,?,?)',[null,data.book_isbn,data.book_title,data.book_author,data.book_description,data.book_status,data.book_price,data.book_publisher,data.book_ratings,filename,data.fk_category_id],callback);
    },
    deleteBookforsale:function(id,callback){
        return db.query('delete from bookforsale_tbl where book_id=?',[id],callback);
    },
    editBookforsale:function(data,filename,callback){
        
        return db.query('update bookforsale_tbl set book_isbn=?,book_title=?,book_author=?,book_description=?,book_status=?,book_price=?,book_publisher=?,book_ratings=?,book_image=?,fk_category_id=? where book_id=?',[data.book_isbn,data.book_title,data.book_author,data.book_description,data.book_status,data.book_price,data.book_publisher,data.book_ratings,filename,data.fk_category_id,data.book_id],callback);
    },
    editBookforsalewithoutfile:function(data,callback){
        
        console.log(data);
        return db.query('update bookforsale_tbl set book_isbn=?,book_title=?,book_author=?,book_description=?,book_status=?,book_price=?,book_publisher=?,book_ratings=?,fk_category_id=? where book_id=?',[data.book_isbn,data.book_title,data.book_author,data.book_description,data.book_status,data.book_price,data.book_publisher,data.book_ratings,data.fk_category_id,data.book_id],callback);
    },
    getBookforsalebyID:function(id,callback){
        return db.query('select b.*,c.* from bookforsale_tbl b,category_tbl c where c.category_id=b.fk_category_id and b.book_id=?',[id],callback);
    },
    getBookByCategoryID:function(id,callback){
        return db.query('select b.*,c.* from bookforsale_tbl b,category_tbl c where c.category_id=b.fk_category_id and c.category_id=?',[id],callback);
    },
    searchBookbyBookISBN:function(search,callback){
        return db.query('select b.*,c.* from bookforsale_tbl b,category_tbl c where c.category_id=b.fk_category_id and b.book_isbn=?',[search],callback);
    },
    searchBookbyBooktitle:function(search,callback){
        return db.query('select b.*,c.* from bookforsale_tbl b,category_tbl c where  c.category_id=b.fk_category_id and b.book_title=?',[search],callback);
    },
    searchBookbyBookAuthor:function(search,callback){
        return db.query('select b.*,c.* from bookforsale_tbl b,category_tbl c where c.category_id=b.fk_category_id and b.book_author=?',[search],callback);
    },
    searchBookbyBookpublisher:function(search,callback){
        return db.query('select b.*,c.* from bookforsale_tbl b,category_tbl c where c.category_id=b.fk_category_id and b.book_publisher=?',[search],callback);
    },
}
module.exports=bfs;
