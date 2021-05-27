var express=require('express');
var router=express.Router();
var log=require('../models1/loginModel');


router.post('/',function(req,res,next){
    log.checkadminuser(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
router.get('/',function(req,res,next){
    log.getAllUsersforSignup(function(err,rows){
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