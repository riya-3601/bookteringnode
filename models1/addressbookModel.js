var db=require('../dbconnection1');
var adb={
    getAllAddreddbook:function(callback){
        return db.query('select a.*,c.* from addressbook_tbl a,customer_tbl c where c.customer_id=a.fk_customer_id',callback);
    },
    addAddressbook:function(data,callback){
        return db.query('insert into addressbook_tbl values (?,?,?,?,?,?,?,?)',[null,data.address_1,data.address_2,data.city,data.state,data.pincode,data.address_type,data.fk_customer_id],callback);
    },
    deleteAddressbook:function(id,callback){
        return db.query('delete from addressbook_tbl where address_id=?',[id],callback);
    },
    editAddressbook:function(data,callback){
        return db.query('update addressbook_tbl set address_1=?,address_2=?,city=?,state=?,pincode=?,address_type=?,fk_customer_id=? where address_id=?'[data.address_1,data.address_2,data.city,data.state,data.pincode,data.address_type,data.fk_customer_id,data.address_id],callback);
    },
    getAddressbookbyid:function(id,callback){
        return db.query('select a.*,c.* from addressbook_tbl a,customer_tbl c where c.customer_id=a.fk_customer_id and a.address_id=?',[data.address_id],callback);
    }
};
module.exports=adb; 