import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  return res.send({ hello: 'world' });
});

export default routes;
