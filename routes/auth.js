const express = require('express');
const jwt = require('jsonwebtoken');
const { secret } = require('../modules/common');

const router = express.Router();

router.get('/login', function(req, res){
    res.send('Login Page');
});

router.post('/login', function(req, res){
    if(req.body.email == "sushil@test.com" && req.body.password == "123456"){
        // create JWT token
        const user = {
            email: req.body.email
        }

        jwt.sign({ data: user }, secret, { expiresIn: '1h' }, function(err, token){
            return res.send({ token: token });
        });

    } else {
        let obj = {
            status: 401,
            message: "Invalid credentials"
        }
    
        return res.status(401).send(obj);
    }
});


module.exports = router;