var express = require('express');
var router = express.Router();
var demo = require("../models1/passwordmail");
router.get('/:email',function(req,res,next){
    demo.getUserforgetpassword(req.params.email,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);  
         }
    });
});
router.post('/',function(req,res,next){

    demo.sendMail(req.body,function(err,message){

        if(err)
        {
            console.log(err);
            res.json(err);
            
        }
        else
        {
            return res.json({success: true, msg: 'sent'});//or return count for 1 or 0
        }
    });
});

module.exports=router;