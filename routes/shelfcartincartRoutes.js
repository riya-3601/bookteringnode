var express=require('express');
var router=express.Router();
var sc=require('../models1/shelfcartModel');
router.post('/',function(req,res,next){
    sc.addincart(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
module.exports=router;