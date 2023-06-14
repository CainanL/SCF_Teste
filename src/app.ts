import express from 'express';
import { routes } from './Routes';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();
let app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.use(routes);

const port = 3000;
app.listen(port, function () {
  console.log(`Cainan Luyles's test server is running on port: ${port}`);
});