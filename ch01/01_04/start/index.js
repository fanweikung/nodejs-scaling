const cluster = require("cluster");
const numCpus = require("os").cpus().length;

if (cluster.isMaster) {
  console.log(`this is the master process: ${process.pid}`);
  cluster.fork();
  cluster.fork();
  cluster.fork();
} else {
  console.log(`this is the worker process: ${process.pid}`);
}
