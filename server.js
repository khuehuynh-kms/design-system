// Require the framework and instantiate it
const fastify = require("fastify")({ logger: true });
const path = require("path");

// Declare a route
fastify.get("/", async (request, reply) => {
  return { hello: "world" };
});

fastify.register(require("@fastify/static"), {
  root: path.join(__dirname, "dist"),
  // prefix: "/public/", // optional: default '/'
});
// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
