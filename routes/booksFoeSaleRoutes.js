var express=require('express');
var router=express.Router();
var cat=require('../models/booksForSaleModel');
router.get('/',function(req,res,next){
    cat.getAllBooks
    (function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
module.exports=router;