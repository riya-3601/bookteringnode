var express=require('express');
var router=express.Router();
var empdet=require('../models1/employeedeliveryModel');

router.get('/:id',function(req,res,next){
    empdet.getEmployeeDeliveryByEmployeeId(req.params.id,function(err,rows){
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