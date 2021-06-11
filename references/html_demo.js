const http = require("http");

// Create server object

http
  .createServer((req, res) => {
    // Write response
    res.write("Hello world");
    res.end();
  })
  .listen(5000, () => console.log("Server running..."));

// $ node html_demo
// Server running
// But nothing shows up on localhost:3000

/////// FROM THE NODEJS DOCS

// const http = require("http");

// const port = process.env.PORT || 5000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/html");
//   res.end("<h1>Hello, World!</h1>");
// });

// server.listen(port, () => {
//   console.log(`Server running at port ${port}`);
// });
