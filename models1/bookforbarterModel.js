var db=require('../dbconnection1');
var bookbarter={

    getAllbookbarter:function(callback) {
      //  return db.query('select * from bookforbarter_tbl',callback);
      return db.query('select bb.*,c.* from bookforbarter_tbl bb,customer_tbl c where c.customer_id=bb.fk_customer_id',callback);
    },

    getbookbarterById:function(id,callback){
        return db.query('select * from bookforbarter_tbl where bookbarter_id=?',[id],callback);
    },

    addbookbarter:function(data,filename,callback){
        return db.query('insert into bookforbarter_tbl values (?,?,?,?,?,?,?,?)',[null,data.bookbarter_title,data.bookbarter_author,data.bookbarter_description,data.bookbarter_status,data.bookbarter_price,filename,data.fk_customer_id],callback);
    },

    deletebookbarter:function(id,callback){
        return db.query('delete from bookforbarter_tbl where bookbarter_id=?',[id],callback);
    },

    updatebookbarter:function(data,filename,callback){
        return db.query('update bookforbarter_tbl set bookbarter_title=?,bookbarter_author=?,bookbarter_description=?,bookbarter_status=?,bookbarter_price=?,bookbarter_image=?,fk_customer_id=? where bookbarter_id=?',[data.bookbarter_title,data.bookbarter_author,data.bookbarter_description,data.bookbarter_status,data.bookbarter_price,filename,data.fk_customer_id,data.bookbarter_id],callback);
    },
    getbookbarterByIdCustomer:function(id,callback){
        return db.query('select bb.*,c.* from bookforbarter_tbl bb,customer_tbl c where bb.bookbarter_id=? and c.customer_id=bb.fk_customer_id',[id],callback);
    },
    getbookforbarterBycustomerid:function(id,callback){
        return db.query('select * from bookforbarter_tbl where fk_customer_id=?',[id],callback);

    }
};
module.exports=bookbarter;