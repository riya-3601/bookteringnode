var express=require('express');
var router=express.Router();
var sc1=require('../models1/shelfcartModel');

router.get('/:id',function(req,res,next){
    sc1.getshelf
    (req.params.id,function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});



router.post('/:id',function(req,res,next){
    sc1.addinshelf(req.body,req.params.id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.put('/',function(req,res,next){
    sc1.onAddCartfromShelf(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
module.exports=router;