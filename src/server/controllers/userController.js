const bcrypt = require('bcryptjs');
const userController = {};

userController.verifyUser = (req, res, next) => {
  res.locals.username = req.body.username;
  res.locals.password = req.body.password;
  // Make call to database
  // FUNCTION NAME, (err, data) => {
  // In callback:
  if (err || !data) {
    // User not found - do something
  } else if (bcrypt.compareSync(res.locals.password, data.password)) {
    next(); // User found - move to next middleware
  }
  // });
};
module.exports = userController;
