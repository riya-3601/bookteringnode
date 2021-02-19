var express=require('express');
var router=express.Router();
var orddet=require('../models1/addressbookModel');
router.post('/',function(req,res,next){
    address.getaddressbyCustomerid(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
module.exports=router;