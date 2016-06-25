import {AccountsController} from './controllers/accountsController';
import {RegisterExpressRoutes} from 'lucid-web-api';
import {UsersController} from './controllers/usersController';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as methodOverride from 'method-override';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());

RegisterExpressRoutes(app, [AccountsController, UsersController])

app.listen(3000);