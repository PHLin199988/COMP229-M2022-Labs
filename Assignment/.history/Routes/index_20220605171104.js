"use strict";
var express = require('express');
var router = express.Router();
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express Portfolio' });
});
module.exports = router;
//# sourceMappingURL=index.js.map