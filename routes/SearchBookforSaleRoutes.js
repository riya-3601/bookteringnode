var express=require('express');
const { search } = require('../app');
var router=express.Router();
var bfs=require('../models1/bookforsale_model');

router.get('/:search/:id',function(req,res,next){
    console.log(req.params.id);
    
    if(req.params.id=="title"){
        bfs.searchBookbyBooktitle(req.params.search,function(err,rows){
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
        bfs.searchBookbyBookAuthor(req.params.search,function(err,rows){
            //console.log(rows);    
           if(err){
               res.json(err);
           }
           else{
               res.json(rows);  
            }
       }); 
    }
    else if(req.params.id=="publisher"){
        bfs.searchBookbyBookpublisher(req.params.search,function(err,rows){
            //console.log(rows);    
           if(err){
               res.json(err);
           }
           else{
               res.json(rows);  
            }
       }); 
    }
    else if(req.params.id=="isbn"){
        bfs.searchBookbyBookISBN(req.params.search,function(err,rows){
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