// express_server.ts
import express from 'express';
import { IServerConfig } from 'utils/config';
import * as config from '../server_config.json';
import { Routes } from './routes';
import * as bodyParser from 'body-parser';

export class ExpressServer {
  private static server: import('http').Server = null;
  public server_config: IServerConfig = config;
  constructor() {
    const port = this.server_config.port ?? 3000;

    // initialize express app
    const app = express();

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.get('/ping', (req, res) => {
      res.send('pong');
    });

    const routes = new Routes(app);

    if (routes) {
      console.log('Server Routes started for server');
    }

    ExpressServer.server = app.listen(port, () => {
      console.log(
        `Server is running on port ${port} with pid = ${process.pid}`
      );
    });
  }

  // close the express server for safe on uncaughtException
  public closeServer(): void {
    ExpressServer.server.close(() => {
      console.log('Server closed');
      process.exit(0);
    });
  }
}
