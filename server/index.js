const {listen} = require('grpc-ws/server');
const apiRoot = require('./api');

const endpoints = (process.env.ENDPOINTS || '')
  .split(/,\s+/)
  .map(host => host.trim())
  .filter(Boolean);

listen({
  endpoints,
  proto: apiRoot,
  ws: {
    port: 80,
  }
});
