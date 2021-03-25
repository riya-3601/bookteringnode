var express=require('express');
var router=express.Router();
var sc=require('../models1/shelfcartModel');

router.get('/:id',function(req,res,next){
    sc.getcart
    (req.params.id,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.post('/:id/:input',function(req,res,next){
    sc.addincart(req.body,req.params.id,req.params.input,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
router.delete('/:id',function(req,res,next){
    sc.deleteFromCart(req.params.id,function(err,rows){
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