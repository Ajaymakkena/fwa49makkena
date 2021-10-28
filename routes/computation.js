var express = require('express');
var router = express.Router();
var value = Math.round(Math.random()*100);

var x=Math.fround(value); 
var y=Math.random(value) 
var z=Math.round(value) 
 

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.send(`[Math.pow] applied to [${value}] is [${x}]<br>
  [Math.sign] applied to [${value}] is [${y}]<br>
  [Math.tanh] applied to [${value}] is [${z}]<br>`); 
});

module.exports = router;
