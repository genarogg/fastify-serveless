"use strict";
const fastify = require("fastify");
const app = fastify();
const serverless = require("serverless-http");

app.get("/test", (request, reply) => {
  reply.send({ hello: "world" });
});

app.get("/test/one", (request, reply) => {
  reply.send({ hello: "world" });
});

module.exports.handler = serverless(app);