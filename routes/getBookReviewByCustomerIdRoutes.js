var express=require('express');
var router=express.Router();
var bookr=require('../models1/bookreviewModel');

router.get('/:bookbarter_id/:customer_id',function(req,res,next){
    bookr.getBookreviewByCustomerrId(req.params.bookbarter_id,req.params.customer_id,function(err,rows){
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