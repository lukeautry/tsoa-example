import './controllers/accountsController';
import './controllers/usersController';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as methodOverride from 'method-override';
import {RegisterRoutes} from './routes';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());

RegisterRoutes(app);

app.listen(3000);
