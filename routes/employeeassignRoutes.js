var express=require('express');
var router=express.Router();
var emp=require('../models1/employeeassignModel');
//localhost:3000/order
router.get('/',function(req,res,next){

    emp.getAllOrders(function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
router.post('/',function(req,res,next){
   
    emp.addempDelivery(req.body,function(err,rows){
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