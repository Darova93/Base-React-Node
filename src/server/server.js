import express from 'express';

const server = express();
server.use(express.static('dist'));

server.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Star Match Game</title>
      </head>
      <body>
        <div id="mountNode"></div>
        <script src="/main.js"></script>
      </body>
    </html>
  `)
});

server.listen(4242, () => console.log('Server is running...'));