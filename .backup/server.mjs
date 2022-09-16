import fastify from 'fastify';

const server = fastify({ logger: true });

// Define / route
server.get('/', async (request, reply) => {
  return { hello: 'world' };
});

// Start the server
(async function start() {
  try {
    await server.listen({ port: 3000 });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
})();
