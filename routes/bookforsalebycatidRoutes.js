var express=require('express');
var router=express.Router();
var bfs=require('../models1/bookforsale_model');
router.get('/:id',function(req,res,next){
    bfs.getBookByCategoryID(req.params.id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);  
         }
    });
});
module.exports=router;