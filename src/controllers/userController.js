// import {auth} from '../../db';
// import User from '../models/user.js';
// import { collection, addDoc } from "firebase/firestore"; 
// import admin from './firebase-service';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const createUser = (email, password) => {
    console.log("HEY")
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            //signed in
            const user = userCredential.user;
            console.log("This is user: ", user);
        })
        .catch((error) => {
    
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        })
}

module.exports = {
    createUser,
    // addUser,
    // getAllUsers,
}