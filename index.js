const express = require('express');

const server = express();

server.use(express.json());
server.use('/api', require('./api'));

const port = 3030;
server.listen(port, () => {
    console.log(`\n=== API running on http://localhost:${port} ===\n`);
  });