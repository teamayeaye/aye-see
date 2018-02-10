let sql = require('../config.js');
let sanatize = require('sqlstring');

const sessionController = {};
//set a cookie using the userId from our local storage;
function setCookie(req, res, next) {
    const cookieValue = res.locals.userId;
    res.cookie('ssid', cookieValue, { httpOnly: true });
    next();
}



module.exports = userController;