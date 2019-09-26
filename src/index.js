import bodyParser from "body-parser";
import express from "express";
import dotenv from 'dotenv';
import router from "./routes/index";
import { init } from '@/services/Db';
// load the dotenv lib
dotenv.config();
const app = express();

// console.log(init);
// init();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", router);

app.listen(process.env.APP_PORT, () => {
  console.log(`Example app listening on port ${process.env.APP_PORT}!`);
  console.log('running init', process.env.PGPORT);
  init();
});