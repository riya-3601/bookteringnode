var express=require('express');
var router=express.Router();
var address=require('../models1/addressbookModel');

router.get('/:id',function(req,res,next){
    address.getaddressbyCustomerid(req.params.id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
module.exports=router; 