 import express, { request, response } from 'express';
 const routes = require('./routes');


 const app = express();
 require('/assets/dbConfig');

  
 app.use(express.json());
 app.use(routes);

 app.listen(3333);