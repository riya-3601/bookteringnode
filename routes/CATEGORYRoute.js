var express=require('express');
var router=express.Router();
var cat1=require('../models1/categoryModel');
var multer = require('multer');
var path = require('path');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/images/category')
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
});
var upload = multer({storage: storage});

//localhost:3000/category
router.get('/',function(req,res,next){

    cat1.getAllCategories(function(err,rows){

        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
//localhost:3000/category/1
router.get('/:id',function(req,res,next){
    cat1.getCategoryById(req.params.id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);  
         }
    });
});
//localhost:3000/category
router.post('/',upload.single('category_image'),function(req,res,next){
    cat1.addCategory(req.body,req.file.filename,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
//localhost:3000/category/1
router.delete('/:id',function(req,res,next){
    cat1.deleteCategory(req.params.id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
//localhost:3000/category
router.put('/',upload.single('category_image'),function(req,res,next){
    cat1.editCategory(req.body,req.file.filename,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


router.put('/:id',function(req,res,next){
    cat1.editCategoryWithoutFile(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
module.exports=router;
