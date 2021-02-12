# Do the npm install or yarn install in the full image
FROM jfrog.joom.it/docker-proxy/node:15.3.0-alpine3.12 as builder
WORKDIR /app

ENV NODE_ENV=production \
  NPM_CONFIG_LOGLEVEL=error \
  NODE_MODULES_CACHE=true \
  NODE_VERBOSE=false \
  NPM_CONFIG_PRODUCTION=

RUN npm install grpc-ws@latest
COPY index.js /app/

CMD ["node", "index.js"]

EXPOSE 80
