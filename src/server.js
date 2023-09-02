import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from '../src/config/viewEngine';
import initWebRoutes from './route/web';
import connectDB from './config/connectDB';

require('dotenv').config();

let app = express();

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

connectDB();

// Port === undefined => Port = 8888
let port = process.env.PORT || 8888;

app.listen(port, () => {
  //callback
  console.log('BE NodeJs is running on the port : ' + port);
});
