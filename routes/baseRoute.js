var express = require('express');
var router = express.Router();

var mainLogger = function (req, res, next) {
    console.log('Main Logger')
    next()
}

router.use(express.static('files'));
router.use(mainLogger);

module.exports = router;