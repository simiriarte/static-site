const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;
const publicDir = './dist';

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  let filePath = path.join(publicDir, req.url === '/' ? 'index.html' : req.url);
  
  // Check if file exists
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      // Try adding .html extension for clean URLs
      if (!path.extname(filePath)) {
        filePath += '.html';
        fs.access(filePath, fs.constants.F_OK, (err) => {
          if (err) {
            serve404(res);
          } else {
            serveFile(filePath, res);
          }
        });
      } else {
        serve404(res);
      }
    } else {
      serveFile(filePath, res);
    }
  });
});

function serveFile(filePath, res) {
  const ext = path.extname(filePath);
  const contentType = mimeTypes[ext] || 'text/plain';
  
  fs.readFile(filePath, (err, data) => {
    if (err) {
      serve500(res);
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
}

function serve404(res) {
  res.writeHead(404, { 'Content-Type': 'text/html' });
  res.end('<h1>404 - Page Not Found</h1>');
}

function serve500(res) {
  res.writeHead(500, { 'Content-Type': 'text/html' });
  res.end('<h1>500 - Internal Server Error</h1>');
}

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
}); 