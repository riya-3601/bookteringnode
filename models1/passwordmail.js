var email = require("emailjs/email");
var db=require('../dbconnection1');
var demo = {

   sendMail: function (demo, callback) {

      var server = email.server.connect({
         user:    "riyapalkhiwala07835@gmail.com", 
         password:"Riya123#@#", 
         host: "smtp.gmail.com",
         ssl: true,
         port: 465
      });


      server.send({
         text: demo.message,
         from: 'riyapalkhiwala07835@gmail.com',
         to: demo.name,
         subject: demo.subject
      }, callback);
   },
   getUserforgetpassword:function(email,callback){
      return db.query('select * from customer_tbl where customer_emailid=?',[email],callback)
   }


}
module.exports = demo;