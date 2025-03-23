"use strict";
const fastify = require("fastify");
const app = fastify();
const serverless = require("serverless-http");

app.get("/test", (request, reply) => {
  reply.send({ hello: "world2" });
});

app.get("/test/one", (request, reply) => {
  reply.send({ hello: "world2" });
});

module.exports.handler = serverless(app);
