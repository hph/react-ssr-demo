import http from 'http';
import React from 'react';
import { renderToString } from 'react-dom/server';
import fs from 'fs';
import { StaticRouter } from 'react-router';

import App from './app';

const clientScript = fs.readFileSync('./build/client.js', {
  encoding: 'utf-8',
});

const server = http.createServer((req, res) => {
  if (req.url === '/client.js') {
    res.end(clientScript);
  } else {
    const context = {};
    const html = renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>,
    );
    res.statusCode = context.status || 200;
    res.end(`
      <div id="root">${html}</div>
      <script src="./client.js"></script>
    `);
  }
});

server.listen(3000);
