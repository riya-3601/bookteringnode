var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//var catRouter=require('./routes/categoryRoutes');
//var bookRouter=require('./routes/booksFoeSaleRoutes');
//var studRouter=require('./routes/studentRoutes');
//var custRouter=require('./routes/customerRoutes');
//var ordRouter=require('./routes/orderRoutes');
// var catRouter=require('./routes/categoryRoutes');
// var bookRouter=require('./routes/booksFoeSaleRoutes');
// var studRouter=require('./routes/studentRoutes');
// var custRouter=require('./routes/customerRoutes');
// var ordRouter=require('./routes/orderRoutes');
var categoryRouter=require('./routes/CATEGORYRoute');
var bookforsaleRouter=require('./routes/BOOKFORSALERoute');
var customerRouter=require('./routes/CUSTOMERRoute');
var addressbookRouter=require('./routes/ADDRESSBOOKRoute');
var orderRouter=require('./routes/ORDERRoute');
var bookforbarterRouter=require('./routes/bookforbarterRoutes');
var bookreviewRouter=require('./routes/bookreviewRoutes');
var employeedeliveryRouter=require('./routes/employeedeliveryRoutes');
var employeeRouter=require('./routes/employeeRoutes');
var orderdetailsRouter=require('./routes/orderdetailsRoutes');
var orderdetailsbyorderidRouter=require('./routes/orderdetailsbyorderidRoute');
var addressbycustomeridRouter=require('./routes/addressbycustomeridRoutes');
var loginRouter=require('./routes/loginRoutes');
var bookreviewbybookbarteridRouter=require('./routes/bookreviewbybookbarteridRoute');
var getEmployeeDeliveryByEmployeeIdRouter=require('./routes/getEmployeeDeliveryByEmployeeIdRoutes');
var employeeassignRouter=require('./routes/employeeassignRoutes');
var bookforbarterCustomerRouter=require('./routes/bookforbarterCustomerRoutes');

var bookforsalebycatidRouter=require('./routes/bookforsalebycatidRoutes');
var shelfcartincartRouter=require('./routes/shelfcartincartRoutes');
var shelfcartinshelfRouter=require('./routes/shelfcartinshelfRoutes');
var booksearchRouter=require('./routes/SearchBookforSaleRoutes');
var bookforbartersearchRouter=require('./routes/SearchBookforbarterRoutes');
var mybooksRouter=require('./routes/mybooksRoutes');
var getbookforbarterfordisplaycustRouter=require('./routes/getbookforbarterfordisplaycustRoutes');
var multipleinsertinorderdetRouter=require('./routes/multipleaddorderdetailsRoutes');
var contactusRouter=require('./routes/contactusRoutes');
var MyOrdersCustomerRouter=require('./routes/myOrdersonCustomerRoutes');
var getBookreviewByCustomerrIdRouter=require('./routes/getBookReviewByCustomerIdRoutes');
var editOrderDeliveredRouter=require('./routes/editOrderDeliveredRoutes');
var passwordmailRouter=require('./routes/passwordmailRoutes');
var sample=require('./routes/sampleroutes');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
//app.use('/category',catRouter);
//app.use('/bookforsale',bookRouter);
//app.use('/student',studRouter);
//app.use('/customer',custRouter);
//app.use('/order',ordRouter);

app.use('/sample',sample);
app.use('/category',categoryRouter);
app.use('/bookforsale',bookforsaleRouter);
app.use('/customer',customerRouter);
app.use('/addressbook',addressbookRouter);
app.use('/order',orderRouter);
app.use('/bookforbarter',bookforbarterRouter);
app.use('/bookreview',bookreviewRouter);
app.use('/employeedelivery',employeedeliveryRouter);
app.use('/employee',employeeRouter);
app.use('/orderdetails',orderdetailsRouter);
app.use('/multipleorderdetails',multipleinsertinorderdetRouter);
app.use('/orderdetailsbyorderid',orderdetailsbyorderidRouter);
app.use('/addressbycustomerid',addressbycustomeridRouter);
app.use('/bookreviewbybookbarterid',bookreviewbybookbarteridRouter);
app.use('/getEmployeeDeliveryByEmployeeId',getEmployeeDeliveryByEmployeeIdRouter);
app.use('/employeeassign',employeeassignRouter);
app.use('/bookforbarterCustomer',bookforbarterCustomerRouter);
app.use('/getbookforbarterfordisplaycust',getbookforbarterfordisplaycustRouter);
app.use('/myorders',MyOrdersCustomerRouter);
app.use('/mybooks',mybooksRouter);
app.use('/bookforsalebycatid',bookforsalebycatidRouter);
app.use('/searchbook',booksearchRouter);
app.use('/searchbookforbarter',bookforbartersearchRouter);
app.use('/login',loginRouter);
app.use('/shelfcartincart',shelfcartincartRouter);
app.use('/shelfcartinshelf',shelfcartinshelfRouter);
app.use('/contactus',contactusRouter);
app.use('/editOrderDelivered',editOrderDeliveredRouter);
app.use('/getBookreviewByCustomerrId',getBookreviewByCustomerrIdRouter);
app.use('/passwordmail',passwordmailRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;