var express=require('express');
var router=express.Router();
var log=require('../models1/loginModel');


router.post('/',function(req,res,next){
    log.checkCustomer(req.body,function(err,rows){
        console.log(rows);
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports=router;