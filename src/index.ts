import bodyParser from "body-parser";
import { Request, Response, NextFunction } from 'express';
import express from "express";
import dotenv from 'dotenv';
import router from '@/routes/index';
import morgan from 'morgan';

// load the dotenv lib
dotenv.config();
const app = express();

app.use(function(_req: Request, res: Response, next: NextFunction) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Authorization, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", router);
app.listen(process.env.APP_PORT, () => {
  console.log(`app started on port ${process.env.APP_PORT}`);
});
