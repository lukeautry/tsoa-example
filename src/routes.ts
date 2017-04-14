/* tslint:disable */
import {ValidateParam} from 'tsoa';
import {Controller} from 'tsoa';
import {AccountsController} from './controllers/accountsController';
import {UsersController} from './controllers/usersController';

const models: any = {
  "User": {
    "id": {"required": true, "typeName": "double"},
    "email": {"required": true, "typeName": "string"},
    "createdAt": {"required": true, "typeName": "datetime"},
  },
  "TestAccount": {
    "id": {"required": true, "typeName": "double"},
    "address": {"required": false, "typeName": "string"},
    "name": {"required": true, "typeName": "string"},
    "users": {"required": false, "typeName": "array", "array": {"typeName": "User"}},
    "fields": {"required": false, "typeName": "array", "array": {"typeName": "string"}},
  },
  "UserCreateRequest": {
    "email": {"required": true, "typeName": "string"},
  },
  "UserUpdateRequest": {
    "createdAt": {"required": false, "typeName": "datetime"},
    "email": {"required": true, "typeName": "string"},
  },
};


/* tslint:disable:forin */
export function RegisterRoutes(app: any) {
  app.get('/v1/Accounts/Current',
    function (request: any, response: any, next: any) {
      const args = {};

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request);
      } catch (err) {
        return next(err);
      }

      const controller = new AccountsController();


      const promise = controller.current.apply(controller, validatedArgs);
      let statusCode = undefined;
      if (controller instanceof Controller) {
        statusCode = (controller as Controller).getStatus();
      }
      promiseHandler(promise, statusCode, response, next);
    });
  app.get('/v1/Accounts/Users',
    function (request: any, response: any, next: any) {
      const args = {};

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request);
      } catch (err) {
        return next(err);
      }

      const controller = new AccountsController();


      const promise = controller.getUsers.apply(controller, validatedArgs);
      let statusCode = undefined;
      if (controller instanceof Controller) {
        statusCode = (controller as Controller).getStatus();
      }
      promiseHandler(promise, statusCode, response, next);
    });
  app.get('/v1/Users/Current',
    function (request: any, response: any, next: any) {
      const args = {};

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request);
      } catch (err) {
        return next(err);
      }

      const controller = new UsersController();


      const promise = controller.Current.apply(controller, validatedArgs);
      let statusCode = undefined;
      if (controller instanceof Controller) {
        statusCode = (controller as Controller).getStatus();
      }
      promiseHandler(promise, statusCode, response, next);
    });
  app.get('/v1/Users/:userId',
    function (request: any, response: any, next: any) {
      const args = {
        userId: {"in": "path", "name": "userId", "required": true, "typeName": "double"},
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request);
      } catch (err) {
        return next(err);
      }

      const controller = new UsersController();


      const promise = controller.Get.apply(controller, validatedArgs);
      let statusCode = undefined;
      if (controller instanceof Controller) {
        statusCode = (controller as Controller).getStatus();
      }
      promiseHandler(promise, statusCode, response, next);
    });
  app.post('/v1/Users',
    function (request: any, response: any, next: any) {
      const args = {
        request: {"in": "body", "name": "request", "required": true, "typeName": "UserCreateRequest"},
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request);
      } catch (err) {
        return next(err);
      }

      const controller = new UsersController();


      const promise = controller.Create.apply(controller, validatedArgs);
      let statusCode = undefined;
      if (controller instanceof Controller) {
        statusCode = (controller as Controller).getStatus();
      }
      promiseHandler(promise, statusCode, response, next);
    });
  app.delete('/v1/Users/:userId',
    function (request: any, response: any, next: any) {
      const args = {
        userId: {"in": "path", "name": "userId", "required": true, "typeName": "double"},
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request);
      } catch (err) {
        return next(err);
      }

      const controller = new UsersController();


      const promise = controller.Delete.apply(controller, validatedArgs);
      let statusCode = undefined;
      if (controller instanceof Controller) {
        statusCode = (controller as Controller).getStatus();
      }
      promiseHandler(promise, statusCode, response, next);
    });
  app.patch('/v1/Users',
    function (request: any, response: any, next: any) {
      const args = {
        request: {"in": "body", "name": "request", "required": true, "typeName": "UserUpdateRequest"},
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request);
      } catch (err) {
        return next(err);
      }

      const controller = new UsersController();


      const promise = controller.Update.apply(controller, validatedArgs);
      let statusCode = undefined;
      if (controller instanceof Controller) {
        statusCode = (controller as Controller).getStatus();
      }
      promiseHandler(promise, statusCode, response, next);
    });


  function promiseHandler(promise: any, statusCode: any, response: any, next: any) {
    return promise
      .then((data: any) => {
        if (data) {
          response.json(data);
          response.status(statusCode || 200);
        } else {
          response.status(statusCode || 204);
          response.end();
        }
      })
      .catch((error: any) => next(error));
  }

  function getValidatedArgs(args: any, request: any): any[] {
    return Object.keys(args).map(key => {
      const name = args[key].name;
      switch (args[key].in) {
        case 'request':
          return request;
        case 'query':
          return ValidateParam(args[key], request.query[name], models, name)
        case 'path':
          return ValidateParam(args[key], request.params[name], models, name)
        case 'header':
          return ValidateParam(args[key], request.header(name), models, name);
        case 'body':
          return ValidateParam(args[key], request.body, models, name);
        case 'body-prop':
          return ValidateParam(args[key], request.body[name], models, name);
      }
    });
  }
}
