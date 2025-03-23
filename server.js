"use strict";
const fastify = require("fastify");
const app = fastify();

app.get("/test", (request, reply) => {
  reply.send({ hello: "world" });
});

app.get("/test/one", (request, reply) => {
  reply.send({ hello: "world" });
});

app.listen(3000, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
