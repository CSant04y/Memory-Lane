import 'dotenv/config';
// const express = require('express');
import express from 'express';

import cors from 'cors';
import { port } from './config.js'
import router from './routes/userRoutes.js';
import bodyParser from 'body-parser';

console.log(port);
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', router);
// app.use((req, res, next) => {
//   req.context = {
//     models,
//     me: models.users[1],
//   }
//   next();
// });

// app.use((req, res, next) => {
//   req.me = users[1];
//   next();
// });
// // const date = Date.parse(req.body.date);
// // const count = Number(req.body.count);

// // GET METHODS
// app.get('/users', (req, res) => {
//   return res.send(Object.values(req.context.models.users));
// });

// app.get('/users/:userId', (req, res) => {
//   return res.send(req.context.models.users[req.params.userId]);
// });

// app.get('/messages', (req, res) => {
//   return res.send(Object.values(req.context.models.messages));
// });

// app.get('/messages/:messageId', (req, res) => {
//   return res.send(req.context.models.messages[req.params.messageId]);
// });

// app.get('/session', (req, res) => {
//   return res.send(req.context.models.users[req.context.me.id]);
// });

// // POST METHODS
// app.post('/users', (req, res) => {
//   return res.send('POST HTTP method on user resource');
// });

// app.put('/users/:userId', (req, res) => {
//   return res.send(
//     `PUT HTTP method on user/${req.params.userId} resource`,
//   );
// });

// app.post('/messages', (req, res) => {
//   const id = uuidv4();

//   const message = {
//     id,
//     text: req.body.text,
//     userId: req.context.me.id,
//   };

//   req.context.models.messages[id] = message;

//   return res.send(message);
// });

// // DELETE METHODS
// app.delete('/users/:userId', (req, res) => {
//   return res.send(
//     `DELETE HTTP method on user/${req.params.userId} resource`,
//   );
// });

// app.delete('/messages/:messageId', (req, res) => {
//   const {
//     [req.params.messageId]: message,
//     ...otherMessages
//   } = req.context.models.messages;

//   req.context.models.messages = otherMessages;

//   return res.send(message);
// })

app.listen(port, () =>
  console.log(`App listening on port ${port}!`),
);
