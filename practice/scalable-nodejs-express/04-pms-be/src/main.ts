// main.ts
import cluster from 'cluster';
import { ExpressServer } from './express_server';
import { DatabaseUtil } from './utils/db';

// connect the express server
const server = new ExpressServer();

// connect the database
new DatabaseUtil();

process.on('uncaughtException', (error: Error) => {
  console.error(`Uncaught exception in worker process ${process.pid}`, error);

  // close any open connections or resources
  server.closeServer();

  setTimeout(() => {
    cluster.fork();
    cluster.worker?.disconnect();
  }, 1000);
});

// gracefully handle termination signals

process.on('SIGINT', () => {
  console.log('Received SIGINT signal');
  // close any open connections or resources
  server.closeServer();
});

process.on('SIGTERM', () => {
  console.log('Received SIGTERM signal');
  // close any open connections or resources
  server.closeServer();
});
