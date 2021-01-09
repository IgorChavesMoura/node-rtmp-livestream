const NodeMediaServer = require('node-media-server');

const config = require('./config/default');

const getStreamKeyFromStreamPath = (streamPath) => {

    let tokens = streamPath.split('/');

    return tokens[tokens.length - 1];

};

const nms = new NodeMediaServer(config.rtmp_server);


nms.on('prePublish', async (id, streamPath, args) => {

    const streamKey = getStreamKeyFromStreamPath(streamPath);

    console.log('[NodeEvent on prePublish]', `id=${id} StreamPath=${streamPath} args=${JSON.stringify(args)}`);

});

module.exports = nms;