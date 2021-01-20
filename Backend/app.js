var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');
var uri = 'mongodb+srv://@crm-2laff.mongodb.net/PRODUCTS';
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(
  uri,
  {
    auth: {
      user: 'mohnishk3797',
      password: 'qwertyasdfghzxcvbn',
    },
  },
  () => {
    console.log('Connected To Database Successfully...');
  }
);
var indexRouter = require('./routes/index');
var productRouter = require('./routes/product');

var app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/product', productRouter);

module.exports = app;
