var express = require('express');
var router = express.Router();
const { homeController } = require('../../controllers');

/* GET home page. */
router.get('/' , homeController);

module.exports = router;
