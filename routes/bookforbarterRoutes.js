var express=require('express');
var router=express.Router();
var bookbart=require('../models1/bookforbarterModel');

var multer = require('multer');
var path = require('path');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/images/bookforbarter')
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
});


var bookforbarter = multer({storage: storage});


router.get('/',function(req,res,next){

    bookbart.getAllbookbarter(function(err,rows){

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
router.get('/:id',function(req,res,next){
    bookbart.getbookbarterById(req.params.id,function(err,rows){
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
router.get('/:name',function(req,res,next){
    bookbart.getbookbarterById(req.params.id,function(err,rows){
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

router.post('/',bookforbarter.single('bookbarter_image'),function(req,res,next){
    bookbart.addbookbarter(req.body,req.file.filename,function(err,rows){
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
router.delete('/:id',function(req,res,next){
    bookbart.deletebookbarter(req.params.id,function(err,rows){
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
router.put('/',bookforbarter.single('bookbarter_image'),function(req,res,next){

    bookbart.updatebookbarter(req.body,req.file.filename,function(err,rows){
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