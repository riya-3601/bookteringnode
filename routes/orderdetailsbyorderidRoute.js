var express=require('express');
var router=express.Router();
var orddet=require('../models1/orderdetailsModel');

router.get('/:id',function(req,res,next){
    orddet.getOrderDetailsByOrderId(req.params.id,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

module.exports=router;