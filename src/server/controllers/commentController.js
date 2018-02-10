// MySQL db connection
let sql = require('../config.js');
let sqlstring = require('sqlstring');


module.exports = {
  add : function (req, res, next) {
    // add post_id, user_id, img (name as stored on server), caption. created_at will default to current time.
    const post_id = req.body.post_id;
    const user_id = req.body.user_id;
    const img = req.file.filename;
    const caption = req.body.caption;
    sql.query(sqlstring.format(`INSERT INTO comments (post_id, user_id, img, caption) VALUES (?,?,?,?)`, [post_id, user_id, img, caption]), (err, result) => {
      if (err) return res.status(400).send(err);
      if (result) return res.send(result); //the id of the comment is stored in result.insertId
      // we probably also want to send the image name, so that the client can display the image.
    });
  },

  getAllComments : function(req,res,next){
    const post_id = req.body.post_id;
    sql.query(sqlstring.format('SELECT * FROM comments WHERE post_id=?',[post_id]), function (err, results, fields) {
      if (err) return res.status(400).send(err);
      if (results) return res.send(results);
    });
  }
}
