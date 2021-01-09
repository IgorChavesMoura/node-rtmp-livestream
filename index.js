const express = require('express');

const path = require('path');

const app = express();

const nodeMediaServer = require('./live-media-server');

const thumbnailGenerator = require('./job/thumbnailGenerator');

app.use('/thumbnail', express.static(path.join(__dirname, 'server', 'thumbnails')));

nodeMediaServer.run();

thumbnailGenerator.start();

app.listen(8889);