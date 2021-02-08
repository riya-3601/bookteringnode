var db=require('../dbconnection1');
var bookreview={

    getAllbookreview:function(callback) {
        return db.query('select * from bookreview_tbl',callback);
    },

    getbookreviewById:function(id,callback){
        return db.query('select * from bookreview_tbl where bookreview_id=?',[id],callback);
    },

    addbookreview:function(data,callback){
        return db.query('insert into bookreview_tbl values (?,?,?,?,?,?)',[null,data.bookreview_description,data.bookreview_date,data.fk_bookbarter_id,data.fk_customer_id,data.fk_category_id],callback);
    },

    deletebookreview:function(id,callback){
        return db.query('delete from bookreview_tbl where bookreview_id=?',[id],callback);
    },

    updatebookreview:function(data,callback){
        return db.query('update bookreview_tbl set bookreview_description=?,bookreview_date=?,fk_bookbarter_id=?,fk_customer_id=?,fk_category_id=?  where bookreview_id=?',[data.bookreview_description,data.bookreview_date,data.fk_bookbarter_id,data.fk_customer_id,data.fk_category_id,data.bookreview_id],callback);
    }

};
module.exports=bookreview;