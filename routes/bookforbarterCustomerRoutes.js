var express=require('express');
var router=express.Router();
var bookbart=require('../models1/bookforbarterModel');

router.get('/:id',function(req,res,next){
    bookbart.getbookbarterByIdCustomer(req.params.id,function(err,rows){
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
 