var express = require('express');
const jwt = require('jsonwebtoken');
const { secret, verifyToken } = require('../modules/common');

var router = express.Router();

router.use(verifyToken);

/* GET users listing. */
router.get('/', verifyToken, function(req, res) {

  jwt.verify(req.token, secret, function(err, decodedToken){
    if(err){
      return res.status(403).send(err);
    } else {
      return res.send(decodedToken);
    }
  });
});

module.exports = router;
