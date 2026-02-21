import { Router } from 'express'

import {
    getUsersHandler,
    postUsersHandler,
    getUserByIdHandler,
    putUserByIdHandler,
    patchUserByIdHandler,
    deleteUserByIdHandler
} from '../controllers/users.mjs'

const router = Router();

/* Users routes */
router.get('/', getUsersHandler);
router.post('/', postUsersHandler);
router.get('/:id', getUserByIdHandler);
router.put('/:id', putUserByIdHandler);
router.patch('/:id', patchUserByIdHandler);
router.delete('/:id', deleteUserByIdHandler);

export default router;