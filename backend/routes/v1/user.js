import express from 'express';

import { loginUser, registerUser, getUser, deleteUser, updateUser } from '../../controller/user-controller.js';

const router = express.Router();

router.post('/user/signin', loginUser);
router.post('/user/signup', registerUser);
router.get('/user/:id', getUser);
router.delete('/user/:id', deleteUser);
router.patch('/user/:id', updateUser);

export default router;
