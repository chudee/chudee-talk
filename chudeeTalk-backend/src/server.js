require('dotenv').config();

import express from 'express';
import path from 'path';
import routes from './routes';
import mongoose from 'mongoose';

import bodyParser from 'body-parser';
import morgan from 'morgan';
import session from 'express-session';

export default class Server {
  constructor() {
    this.app = express();
    this.port = 3000;
    this.middleware();
    this.initDb();
  }

  middleware() {
    // parse application/x-www-form-urlencoded
    this.app.use(bodyParser.urlencoded({ extended: false }))
    this.app.use(bodyParser.json());
    this.app.use(morgan('combined'));
    this.app.use(session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: true
    }));
    this.app.use('/api', routes);
    
    this.app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).send("Something broke!");
    });
  }

  initDb() {
    /* mongoDB connection */
    const db = mongoose.connection;
    db.on("error", console.error);
    db.once("open", () => {
      console.log("Connected to mongodb server");
    });
    mongoose.connect("mongodb://localhost/chudee_talk");
  }

  listen() {
    const { app, port } = this;
    app.listen(port);
    console.log("Express is listening on port", port);
  }
}