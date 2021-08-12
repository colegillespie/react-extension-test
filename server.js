var fs = require('fs'),
    http = require('http');

http.createServer(function (req, res) {
  var file = req.url;
  if(file === '/') {
    file = '/index.html'
  }
  fs.readFile(__dirname + file, function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
}).listen(8000);