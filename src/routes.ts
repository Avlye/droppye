import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

const routes = Router();

routes.post('/posts', multer(multerConfig).single('file'), (req, res) => {
  return res.send(req.file);
});

export default routes;
