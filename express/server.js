const Fastify = require("fastify")
const path = require("path")
const fs = require("fs")
const { promisify } = require("util")

const fastify = Fastify()
const port = 3000

// Define the path to the public directory
const publicPath = path.join(__dirname, "..", "public")

// Serve static files and handle 404
fastify.get("/*", async (request, reply) => {
  const requestedPath = decodeURIComponent(request.url || "")
  let filePath = path.join(publicPath, requestedPath)

  // Handle default file for root URL
  if (requestedPath === "/" || requestedPath === "") {
    filePath = path.join(publicPath, "index.html")
  } else if (!filePath.endsWith(".html")) {
    filePath = `${filePath}.html`
  }

  try {
    // Check if the file exists
    await promisify(fs.access)(filePath, fs.constants.F_OK)
    reply.type("text/html").send(fs.readFileSync(filePath))
  } catch {
    // Serve 404.html if the file does not exist
    const notFoundPath = path.join(publicPath, "404.html")
    reply.code(404).type("text/html").send(fs.readFileSync(notFoundPath))
  }
})

// Start the server
fastify.listen({ port }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server running at http://localhost:${port}`)
})
