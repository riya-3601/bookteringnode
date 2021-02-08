var express=require('express');
var router=express.Router();
var bookbart=require('../models1/bookforbarterModel');

router.get('/',function(req,res,next){

    bookbart.getAllbookbarter(function(err,rows){

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
    bookbart.getbookbarterById(req.params.id,function(err,rows){
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
    bookbart.addbookbarter(req.body,function(err,rows){
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
    bookbart.deletebookbarter(req.params.id,function(err,rows){
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

    bookbart.updatebookbarter(req.body,function(err,rows){
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