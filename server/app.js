const express = require("express");
const app = express();

const port = 8080;

app.get("/hi", (req, res) => {
  res.send("hi");
});

app.get("/", (req, res) => {
  const url = "http://localhost:8080/hi";

  fetch(url, { method: "GET" })
    .then((response) => response.text())
    .then((data) => {
      res.send(data);
    });
});

app.listen(port, () => {
  console.log("");
});
