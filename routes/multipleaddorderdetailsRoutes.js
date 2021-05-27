var express=require('express');
var router=express.Router();
var orddet=require('../models1/orderdetailsModel');
router.post('/:order_id',function(req,res,next){
    orddet.addorderdetails1(req.body,req.params.order_id,function(err,rows){
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