const http = require('http');
const server = http.createServer((req, res) => {
    console.log("Received req")
    res.writeHead(200, {
        "Content-Type": "text/plain"
    });
    // messed up and typed content/type causing buncha errors

    const content = req.url.slice(1);
    res.end(content);
});

server.listen(3000, () => {
    console.log("listening on port 3000");
});
