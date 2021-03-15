var express=require('express');
var router=express.Router();
var sc1=require('../models1/shelfcartModel');

router.get('/',function(req,res,next){
    sc1.getshelf
    (function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});



router.post('/',function(req,res,next){
    sc1.addinshelf(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
module.exports=router;