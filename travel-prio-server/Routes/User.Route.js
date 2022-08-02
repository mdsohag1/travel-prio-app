import express from 'express';
import { createUser, getAllUsers, getUser } from './../Controllers/User.Controller.js';
const router = express.Router();

router.post('/', createUser)
router.get('/', getUser)
router.get('/allUser', getAllUsers)

export default router;