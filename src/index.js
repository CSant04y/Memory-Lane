// import { initializeApp } from 'firbase/app';
// const firebaseConfig = {
//     apiKey: "AIzaSyDd1DnqW4-EGAMMAKmyWERnYDwOKJLgDhg",
//     authDomain: "memory-lane-f1f8b.firebaseapp.com",
//     projectId: "memory-lane-f1f8b",
//     storageBucket: "memory-lane-f1f8b.appspot.com",
//     messagingSenderId: "82707208352",
//     appId: "1:82707208352:web:138abe3484b4c1c3c391c5",
//     measurementId: "G-XH51JXWTVX"
//   };

// const firbaseApp = initializeApp(firebaseConfig);

import 'dotenv/config';
import express from "express";
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';

// Middleware to allow cross origin recource sharing
const app = express();

app.use(cors());

let users = {
  1: {
    id: '1',
    username: 'Robin Wieruch',
  },
  2: {
    id: '2',
    username: 'Dave Davids',
  },
};

let messages = {
  1: {
    id: '1',
    text: 'Hello World',
    userId: '1',
  },
  2: {
    id: '2',
    text: 'By World',
    userId: '2',
  },
};

// GET METHODS
app.get('/users', (req, res) => {
  return res.send(Object.values(users));
});

app.get('/users/:userId', (req, res) => {
  return res.send(users[req.params.userId]);
});

app.get('/messages', (req, res) => {
  return res.send(Object.values(messages));
});

app.get('/messages/:messageId', (req, res) => {
  return res.send(messages[req.params.messageId]);
});

// POST METHODS
app.post('/users', (req, res) => {
  return res.send('POST HTTP method on user resource');
});

app.put('/users/:userId', (req, res) => {
  return res.send(
    `PUT HTTP method on user/${req.params.userId} resource`,
  );
});
// DELETE METHODS
app.delete('/users/:userId', (req, res) => {
  return res.send(
    `DELETE HTTP method on user/${req.params.userId} resource`,
  );
});

app.listen(process.env.PORT, () =>
  console.log(`App listening on port ${process.env.PORT}!`),
);
