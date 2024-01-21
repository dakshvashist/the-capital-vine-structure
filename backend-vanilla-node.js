const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 80;

const home = fs.readFileSync('./index.html')
const about = fs.readFileSync('./about-us.html')
const blogHome = fs.readFileSync('./blog-template.html')

const server = http.createServer((req, res) => {
    console.log(req.url);
    url = req.url;
    res.statusCode = 200;
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    if (url == '/'){
      res.end(home);
    }
    else if (url == '/index.html'){
      res.end(home)
    }
    else if(url == '/about-us.html'){
      res.end(about);
    }
    else if(url == '/blog-template.html'){
      res.end(blogHome);
    }
    else{
      res.statusCode = 404;
      res.end("<h1>We have encountered an error. Please hold!</h1>");
    }
    
  });

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
