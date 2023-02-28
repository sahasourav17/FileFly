const express = require("express");
const path = require("path");
// const http = require("http");

const app = express();
// const server = http.createServer(app);

app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  res.send("./public/index.html");
});

app.listen(3000, () => {
  console.log("Listen on http://localhost:3000");
});
