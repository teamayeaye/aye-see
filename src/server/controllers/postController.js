let sql = require('../config.js');
let sanatize = require('sqlstring');
module.exports = {
  create: function(req, res, next) {
    const { user_id, title, link, img } = req.body;
    sql.query(
      sanatize.format(
        'INSERT INTO post (user_id,title,link,img) VALUES (?,?,?,?)',
        [user_id, title, link, img]
      ),
      function(err, results, fields) {
        if (err) res.send(err);
        console.log(fields);
        res.send(results);
      }
    );
  },

  read: function(req, res, next) {
    sql.query(sanatize.format('SELECT * FROM post'), function(
      err,
      results,
      fields
    ) {
      if (err) res.send(err);
      res.send(results);
    });
  },

  end: function(req, res, next) {
    sql.end();
    res.json('closed');
  }
};
