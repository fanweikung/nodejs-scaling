const http = require("http");
const cluster = require("cluster");
const numCpus = require("os").cpus().length;

if (cluster.isMaster) {
  console.log(`this is the master process: ${process.pid}`);
  for (let i = 0; i < numCpus; i++) {
    cluster.fork();
  }
} else {
  http
    .createServer((req, res) => {
      let message = `worker ${process.pid}...`;
      console.log(message);
      res.end(message);
    })
    .listen(3000);
}
