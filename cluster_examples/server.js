const cluster = require("cluster");
const os = require("os");

const totalCpus = os.cpus().length;
console.log(totalCpus);
if (cluster.isPrimary) {
  for (let i = 0; i < totalCpus; i++) {
    cluster.fork();
  }
} else {
  const express = require("express");
  const app = express();

  app.use(express.json());

  app.get("/", (req, res) => {
    res.end(`Hello Server ${process.pid} `);
  });

  app.listen(5000, () => {
    console.log("server is running on port");
  });
}
