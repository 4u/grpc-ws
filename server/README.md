# How to use server

Build the image: 
```
docker build -t grpc-ws-server .
```

Run with following paramets:
- Path to protobufjs file. Shoud be mounted as `/app/api.js`.
- Provide `PORT`. App uses `80` inside container.
- Provide allowed `ENDPOINTS` for client connections. Omit this ENV variable if you want to allow to connect everywhere (dangerous, do not use it on production server).

```
docker run \
  -p 8080:80 \
  -e ENDPOINTS=a.example.com,b.example.com \
  -v /path/to/protobuf/api.js:/app/api.js \
  grpc-ws-server
``
