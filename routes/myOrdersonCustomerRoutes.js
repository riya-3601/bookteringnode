var express=require('express');
var router=express.Router();
var ord=require('../models1/orderModel');
//localhost:3000/order
router.get('/:id',function(req,res,next){

    ord.getMyOrders(req.params.id,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
router.get('/',function(req,res,next){

    ord.getAllOrdersAdmin(function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
module.exports=router;