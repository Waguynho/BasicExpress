let express = require('express');
let router = express.Router();
let cors = require('cors');

let mainLogger = function (req, res, next) {
    console.log('Main Logger');
    next();
}

router.use(cors());
router.use(express.static('files'));
router.use(mainLogger);

module.exports = router;