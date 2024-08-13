const Fastify = require('fastify');
const path = require('path');
const fs = require('fs');
const { promisify } = require('util');
const mime = require('mime-types');

const fastify = Fastify();
const port = 3000;

// Define the path to the public directory
const publicPath = path.join(__dirname, '..', 'public');

// Handle all requests and serve static files
fastify.get('/*', async (request, reply) => {
  const filePath = path.join(publicPath, request.url || '');
  
  // Serve index.html for root URL
  if (request.url === '/' || request.url === '') {
    const defaultFilePath = path.join(publicPath, 'index.html');
    return sendFile(reply, defaultFilePath);
  }

  // Serve the requested file or return 404
  try {
    await promisify(fs.access)(filePath, fs.constants.F_OK);
    return sendFile(reply, filePath);
  } catch {
    // Serve 404.html if the file does not exist
    const notFoundPath = path.join(publicPath, '404.html');
    reply.code(404);
    return sendFile(reply, notFoundPath);
  }
});

// Helper function to send files with the correct MIME type
function sendFile(reply, filePath) {
  const mimeType = mime.lookup(filePath) || 'application/octet-stream';
  reply.type(mimeType).send(fs.readFileSync(filePath));
}

// Start the server
fastify.listen({ port }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running at ${address}`);
});
