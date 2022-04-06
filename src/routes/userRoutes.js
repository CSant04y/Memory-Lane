import express from 'express';
// import {  } from '../controllers/userController.js';
import { createUser } from '../controllers/userController.js';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const router = express.Router();

// router.post('/user', addUser);
router.post('/auth/signup', (req, res) => {
    const { email, password } = req.body
    createUser(email, password);
    res.send("Creates User");
});
// router.get('/users', getAllUsers);
export default router;
