var express = require('express');
var router = express.Router();
var Busboy = require('busboy');
var fs = require('fs');
var path = require('path');
var productModel = require('../models/product.model');

/* GET product listing. */
router.get('/', function (req, res, next) {
  let { page, sort } = req.query;
  let options = {};
  if (parseInt(page) !== NaN) {
    options['page'] = parseInt(page);
  }
  if (sort) {
    let sortOption = sort.split('_');
    options['sort'] = { [sortOption[0]]: sortOption[1] === 'asc' ? 1 : -1 };
  }
  options['limit'] = 5;
  productModel.paginate({}, options, (err, result) => {
    if (err) {
      res.status(400).json({ err });
    } else {
      res.status(200).json(result);
    }
  });
});

/* POST product. */
router.post('/', function (req, res, next) {
  var busboy = new Busboy({
    headers: req.headers,
  });
  let saveName = '';
  let data = {};
  busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
    saveName = new Date().getTime() + '_' + filename;
    var saveTo = path.join(__dirname, '../public/images', saveName);
    console.log(saveTo, 'asdas');
    file.pipe(fs.createWriteStream(saveTo));
    data['media'] = `images/${saveName}`;
  });
  busboy.on('field', function (fieldname, val) {
    data[fieldname] = val;
  });
  busboy.on('finish', function () {
    let productData = new productModel(data);
    productData.save(productData, (err, result) => {
      if (err) {
        res.status(400).json({ err });
      } else {
        res.status(200).json(result);
      }
    });
  });
  return req.pipe(busboy);
});

/* DELETE product. */
router.delete('/:id', function (req, res, next) {
  const { id } = req.params;
  if (!id) {
    res
      .status(400)
      .json({ status: false, message: 'Please Provide valid product id.' });
    return;
  }
  productModel.findByIdAndDelete(id, (err, result) => {
    if (err) {
      res.status(400).json({ err });
    } else {
      res.status(200).json(result);
    }
  });
});

/* UPDATE product. */
router.put('/:_id', function (req, res, next) {
  const { _id } = req.params;
  if (!_id) {
    res
      .status(400)
      .json({ status: false, message: 'Please Provide valid product id.' });
    return;
  }
  var busboy = new Busboy({
    headers: req.headers,
  });
  let saveName = '';
  let data = {};
  busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
    saveName = new Date().getTime() + '_' + filename;
    var saveTo = path.join(__dirname, '../public/images', saveName);
    file.pipe(fs.createWriteStream(saveTo));
    data['media'] = `images/${saveName}`;
    console.log(data, 'media');
  });
  busboy.on('field', function (fieldname, val) {
    console.log(fieldname, val);
    data[fieldname] = val;
  });
  busboy.on('finish', function () {
    console.log(data);
    productModel.updateOne({ _id }, data, (err, response) => {
      if (err) {
        res.status(400).json({ err });
      } else {
        productModel.findById(_id, (err, result) => {
          if (err) {
            res.status(400).json({ err });
          } else {
            res.status(200).json({ status: true, result });
          }
        });
      }
    });
  });
  return req.pipe(busboy);
});
module.exports = router;
