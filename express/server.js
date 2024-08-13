import express from 'express';
import path from 'path';
import fs from 'fs';
const app = express();
const port = 3000;
// Define the path to the public directory
const publicPath = path.join(__dirname, '..', 'public');
// Serve static files from the '../public' directory
app.use(express.static(publicPath));
// For any other routes, check if the HTML file exists, otherwise serve 404.html
app.get('*', (req, res) => {
    const filePath = path.join(publicPath, req.url);
    // Check if the requested path ends with .html, if not, append it
    const htmlFilePath = filePath.endsWith('.html') ? filePath : `${filePath}.html`;
    // Check if the HTML file exists
    if (fs.existsSync(htmlFilePath)) {
        res.sendFile(htmlFilePath);
    }
    else {
        // If the file doesn't exist, serve 404.html
        const notFoundPath = path.join(publicPath, '404.html');
        res.status(404).sendFile(notFoundPath);
    }
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
