var express=require('express');
var router=express.Router();
var ord=require('../models1/orderModel');
router.put('/:id',function(req,res,next){
    ord.editOrderDelivered(req.params.id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports=router;
