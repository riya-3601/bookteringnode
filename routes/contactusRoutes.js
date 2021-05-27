var express=require('express');
var router=express.Router();
var cont=require('../models1/contactusModel');
//localhost:3000/customer
router.get('/',function(req,res,next){

    cont.getAllContactus(function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        } 
    });
});
router.delete('/:id',function(req,res,next){
    cont.deleteContactus(req.params.id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
router.post('/',function(req,res,next){
    cont.addContactus(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
module.exports=router;