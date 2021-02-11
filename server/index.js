const {listen} = require('grpc-ws/server');
const apiRoot = require('./api');

const hosts = (process.env.HOSTS || '')
  .split(/,\s+/)
  .map(host => host.trim())
  .filter(Boolean);

listen({
  hosts,
  proto: apiRoot,
  port: 80,
});
