var express=require('express');
var router=express.Router();
var address=require('../models1/addressbookModel');
//localhost:3000/category
router.get('/',function(req,res,next){

    address.getAllAddreddbook(function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
//localhost:3000/category/1
router.get('/:id',function(req,res,next){
    address.getAddressbookbyid(req.params.id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);  
         } 
    });
});
//localhost:3000/category
router.post('/',function(req,res,next){
    address.addAddressbook(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});



//localhost:3000/category/1
router.delete('/:id',function(req,res,next){
    address.deleteAddressbook(req.params.id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
//localhost:3000/category
router.put('/',function(req,res,next){
    address.editAddressbook(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
module.exports=router;
