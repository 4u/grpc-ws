# Do the npm install or yarn install in the full image
FROM jfrog.joom.it/docker-proxy/node:15.3.0-alpine3.12 as builder
WORKDIR /app

ENV NODE_ENV=production \
  NPM_CONFIG_LOGLEVEL=error \
  NODE_MODULES_CACHE=true \
  NODE_VERBOSE=false \
  NPM_CONFIG_PRODUCTION=

COPY package.json package-lock.json /app/
RUN npm install --production
COPY index.js /app/

CMD ["npm", "start"]

EXPOSE 80
