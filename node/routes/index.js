var express = require('express');
var router = express.Router();
var user = require("../controllers/user.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login',user.login);
router.post('/dologin',user.dologin);
router.get('/adminIndex',user.adminIndex);
router.get('/reg',user.reg);
module.exports = router;
