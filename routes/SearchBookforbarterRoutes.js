var express=require('express');
const { search } = require('../app');
var router=express.Router();
var bookbart=require('../models1/bookforbarterModel');

router.get('/:search/:id',function(req,res,next){
    console.log(req.params.id);
    
    if(req.params.id=="title"){
        bookbart.searchBookbyBooktitle(req.params.search,function(err,rows){
            //console.log(rows);    
           if(err){
               res.json(err);
           }
           else{
               res.json(rows);  
            }
       }); 
    }
    else if(req.params.id=="author"){
        bookbart.searchBookbyBookAuthor(req.params.search,function(err,rows){
            //console.log(rows);    
           if(err){
               res.json(err);
           }
           else{
               res.json(rows);  
            }
       }); 
    }
    else if(req.params.id=="username"){
        bookbart.searchBookbyUsername(req.params.search,function(err,rows){
            //console.log(rows);    
           if(err){
               res.json(err);
           }
           else{
               res.json(rows);  
            }
       }); 
    }
    
});
module.exports=router;