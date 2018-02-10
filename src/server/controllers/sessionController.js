let sql = require('../config.js');
let sanatize = require('sqlstring');

const sessionController = {};

function setCookie(req, res, next) {
    const cookieValue = res.locals.userId;
    res.cookie('ssid', cookieValue, { httpOnly: true });
    next();
}



module.exports = userController;