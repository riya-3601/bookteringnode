var express=require('express');
var router=express.Router();
var ord=require('../models1/orderModel');
//localhost:3000/order
router.get('/',function(req,res,next){

    ord.getAllOrders(function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
//localhost:3000/order/1
router.get('/:id',function(req,res,next){
    ord.getOrderById(req.params.id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);  
         }
    });
});
//localhost:3000/order
router.post('/',function(req,res,next){
    ord.addOrder(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
//localhost:3000/order/1
router.delete('/:id',function(req,res,next){
    ord.deleteOrder(req.params.id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
//localhost:3000/order
router.put('/',function(req,res,next){
    ord.editOrder(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports=router;
