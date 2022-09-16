import fastify from 'fastify';

const server = fastify({ logger: true });

// Define / route that returns JSON
// Warning: this is not how you write performant APIs
server.get('/', function handler(request, reply) {
  // 2. Later
  setTimeout(function () {
    reply.send({ hello: 'Fastify' });
  }, 3000);

  // 1. First
  console.log('Sending reply to client but wait for it...');
});

// Uses `http` and `https` module to open sockets
// Socket IO is keeping the event loop alive and Node.js running
(async function start() {
  try {
    await server.listen({ port: 3000 });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
})();
