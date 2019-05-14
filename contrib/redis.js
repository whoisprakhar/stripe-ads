const redis = require('redis'),
      client = redis.createClient(process.env.REDIS_URL);


client.on('error', err => console.log("Error " + err));
module.exports = client;