let sql = require('../config.js');
let sanatize = require('sqlstring');
module.exports = {

  find : function(req,res,next){
    let { user_id } = req.body
    sql.query(sanatize.format('SELECT * FROM user WHERE id=$',[user_id]), function (error, results, fields) {
      if (error) res.send(error);
      console.log('The solution s: ', results[0].solution);
      res.send(results)
    });

  },

  end : function(req,res,next){

    sql.end()
    res.send('closed')
  }
 


  
}
