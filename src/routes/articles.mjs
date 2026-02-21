import { Router } from 'express'

import {
    getArticlesHandler,
    postArticlesHandler,
    getArticleByIdHandler,
    putArticleByIdHandler,
    patchArticleByIdHandler,
    deleteArticleByIdHandler
} from '../controllers/articles.mjs'

const router = Router();

/* Articles routes */
router.get('/', getArticlesHandler)
router.post('/', postArticlesHandler)
router.get('/:id', getArticleByIdHandler)
router.put('/:id', putArticleByIdHandler)
router.patch('/:id', patchArticleByIdHandler)
router.delete('/:id', deleteArticleByIdHandler)

export default router;