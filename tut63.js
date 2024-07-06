// console.log("Hello world");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>pseudo selectors and more designing</title>
    <style>
      .container {
        border: 2px solid red;
        background-color: rgb(223, 245, 201);
        padding: 34px;
        margin: 34px auto;
        width: 500px;
  
      }
  
      a {
        text-decoration: none;
        color: black;
      }
  
      a:hover {
        color: darkred;
        background-color: aqua;
      }
  
      a:visited {
        color: yellow;
      }
  
      a:active {
        /* color: darkblue; */
        background-color: blueviolet;
      }
  
      .btn {
        font-family: cursive;
        font-weight: bold;
        background-color: green;
        padding: 6px;
        border: none;
        cursor: pointer;
        font-size: 15px;
        border-radius: 4px;
      }
  
      .btn:hover {
        color: silver;
        background-color: tomato;
        border: 2px solid black;
      }
    </style>
  </head>
  
  <body>
    <div class="container id=" cont1">
      <h3>This is my heading</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate qui impedit fuga odio, facilis voluptas!
        Magni possimus maxime similique soluta culpa ipsa, error voluptates vitae pariatur, debitis ex voluptatem
        dignissimos quod consectetur iusto quibusdam.</p>
      <a href="https://google.com" class="btn">Read more</a>
      <button class="btn">Contact us</button>
    </div>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});