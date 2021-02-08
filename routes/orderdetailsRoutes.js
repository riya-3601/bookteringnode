var express=require('express');
var router=express.Router();
var orddet=require('../models1/orderdetailsModel');

router.get('/',function(req,res,next){

    orddet.getAllorderdetails(function(err,rows){

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
    orddet.getorderdetailsById(req.params.id,function(err,rows){
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
    orddet.addorderdetails(req.body,function(err,rows){
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
    orddet.deleteorderdetails(req.params.id,function(err,rows){
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

    orddet.updateorderdetails(req.body,function(err,rows){
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