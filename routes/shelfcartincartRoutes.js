var express=require('express');
var router=express.Router();
var sc=require('../models1/shelfcartModel');

router.get('/',function(req,res,next){
    sc.getcart
    (function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.post('/:input',function(req,res,next){
    sc.addincart(req.body,req.params.input,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
module.exports=router;