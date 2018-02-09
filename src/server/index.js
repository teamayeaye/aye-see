// Set up express server
const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);

const multer = require('multer');

// socket.io
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

const postController = require('./controllers/postController');

server.listen(port, function () {
  console.log(`Server listening at port ${port}`);
});

// Routing

// Serve all static files (index.html, image files, etc) from the root directory.
app.use(express.static(__dirname + './../../'));


// Create New Post (with image)

// This "storage" definition is only necessary so that we can append the extension to the filename.
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function(req, file, cb) {
    let extension = '.' + file.mimetype.split('/')[1]
    cb(null, Date.now() + extension);
  }
});
const upload = multer({ storage });
app.post('/newPost', upload.single('photo'), function (req, res, next) {
  // save the contents of req.body to the db
  // send a response so that the client can re-render the page
  // send the filename back so they can ask for it later.
  // if the client wants to access the file, they just navigate to '/uploads/:filename'
  res.status(200).send(req.file.filename);
});


io.on('connection', function(socket) {
  socket.on('new post', function(data) {
  //if ANY client sends a new post, they should probably emit a 'new post' event.
  
    // First, update the db, then...
    // send the 'new post' event back to the client

  })
});
