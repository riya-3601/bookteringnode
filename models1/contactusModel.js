var db1=require('../dbconnection1');
var contactus={
    getAllContactus:function(callback){
        return db1.query('select co.*,c.* from contactus_tbl co,customer_tbl c where c.customer_id=co.fk_customer_id',callback);
    },
    addContactus:function(data,callback){
        return db1.query('insert into contactus_tbl values (?,?,?,?,?)',[null,data.contactus_name,data.contactus_emailid,data.contactus_message,data.fk_customer_id],callback);
    },
    deleteContactus:function(id,callback){
        return db1.query('delete from contactus_tbl where contactus_id=?',[id],callback);
    },
};
module.exports=contactus;