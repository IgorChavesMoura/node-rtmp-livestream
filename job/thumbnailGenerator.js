const request = require('request');

const { CronJob } = require('cron');


const config = require('../config/default');
const thumbnailUtils = require('../util/thumbnailUtils'); 

const port = config.rtmp_server.http.port;

const job = new CronJob('*/5 * * * * *', () => {

    request.get(`http://127.0.0.1:${port}/api/streams`, (error, response, body) => {

        let streams = JSON.parse(body);
        
        if(!!streams['live']){

            let liveStreams = streams['live'];

            for(let liveStream in liveStreams){

                if(!liveStreams.hasOwnProperty(liveStream)){

                    continue;

                }

                thumbnailUtils.generateStreamThumbnail(liveStream);

            }

        }

    });

}, null, true);

module.exports = job;