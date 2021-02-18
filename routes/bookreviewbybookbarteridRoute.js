var express=require('express');
var router=express.Router();
var bookr=require('../models1/bookreviewModel');

router.get('/:id',function(req,res,next){
    bookr.getBookreviewByBookbarterId(req.params.id,function(err,rows){
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