import * as express from 'express';
import { Request, Response, NextFunction } from 'express';

import { HttpException, NotFoundException } from './utils/errorHandler';
import * as bodyParser from 'body-parser';
import { users, Users } from './users/users';

const app: express.Application = express();
app.use(bodyParser.json());

app.get('/api/users', (req: Request, res: Response) => {
  res.json(users);
});

app.get('/users/:id', (req, res, next) => {
  const userId = req.params.id;
  const user = new Users();
  const isUserExist = user.getUserById(userId);

  if (!isUserExist) {
    return next(new NotFoundException(`User with ID ${userId} not found`));
  }

  res.status(200).json(user);
});

app.use(
  (err: HttpException, req: Request, res: Response, next: NextFunction) => {
    const status = err.status || 500;
    const message = err.message || 'Internal server error';

    res.status(status).json({ error: message });
  }
);

app.listen(3000, () => {
  console.log('Server listening on port 3000!');
});
