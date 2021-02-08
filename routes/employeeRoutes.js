var express=require('express');
var router=express.Router();
var emp=require('../models1/employeeModel');

router.get('/',function(req,res,next){

    emp.getAllemployee(function(err,rows){

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
router.get('/:id',function(req,res,next){
    emp.getemployeeById(req.params.id,function(err,rows){
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
router.post('/',function(req,res,next){
    emp.addemployee(req.body,function(err,rows){
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
router.delete('/:id',function(req,res,next){
    emp.deleteemployee(req.params.id,function(err,rows){
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
router.put('/',function(req,res,next){

    emp.updateemployee(req.body,function(err,rows){
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