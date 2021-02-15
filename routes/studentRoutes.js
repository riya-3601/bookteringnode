var express=require('express');
var router=express.Router();
var stud=require('../models/studentModel');
router.get('/',function(req,res,next){
    stud.getAllStudent(function(err,rows){
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