var express=require('express');
var router=express.Router();
var bfs=require('../models1/bookforsale_model');
var multer = require('multer');
var path = require('path');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/images/bookForSale')
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
});

var upload = multer({storage: storage});


// router.post('/', upload.single('image'),function(req,res,json){

//     customer.addCustomer(req.body,req.file.filename,function(err,rows){

//             if(err){
//                 res.json(err);
//             }
//             else{
//                 res.json(rows);
//             }
//     });
// });


router.post('/',upload.single('book_image'),function(req,res,next){
    //console.log(req.file);
    bfs.addBookforsale(req.body,req.file.filename,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

//localhost:3000/category
router.put('/',upload.single('book_image'),function(req,res,next){
    //console.log(req.file);
    bfs.editBookforsale(req.body,req.file.filename,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

//putmethod for editbook without file

router.put('/:id',function(req,res,next){

    console.log(req.body);
    bfs.editBookforsalewithoutfile(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});



router.get('/',function(req,res,next){
    bfs.getAllBooks
    (function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
router.get('/:id',function(req,res,next){
    bfs.getBookforsalebyID(req.params.id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);  
         }
    });
});
//localhost:3000/category

//localhost:3000/category/1
router.delete('/:id',function(req,res,next){
    bfs.deleteBookforsale(req.params.id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


module.exports=router;