var express=require('express');
var router=express.Router();
var samp=require('../models1/samplemodel');
router.get('/',function(req,res,next){
    samp.addCategory(function(err,rows){
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