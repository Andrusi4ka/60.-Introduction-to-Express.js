import { Router } from 'express'
import usersRouter from './users.mjs';
import articlesRouter from './articles.mjs';
import { getRootHandler } from '../controllers/root.mjs'

const router = Router();

router.get('/', getRootHandler);
router.use('/users', usersRouter);
router.use('/articles', articlesRouter);

export default router;