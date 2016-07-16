
/**
 * THIS IS GENERATED CODE - DO NOT EDIT
 */
import {ValidateParam} from 'tsoa';
import { AccountsController } from './controllers/accountsController';
import { UsersController } from './controllers/usersController';

const models: any = {
    'User': {
        'id': { typeName: 'number', required: true },
        'email': { typeName: 'string', required: true },
        'createdAt': { typeName: 'datetime', required: true },
    },
    'Account': {
        'id': { typeName: 'number', required: true },
        'address': { typeName: 'string', required: false },
        'name': { typeName: 'string', required: true },
        'users': { typeName: 'array', required: false, arrayType: 'User' },
        'fields': { typeName: 'array', required: false, arrayType: 'string' },
    },
    'UserCreateRequest': {
        'email': { typeName: 'string', required: true },
    },
    'UserUpdateRequest': {
        'createdAt': { typeName: 'datetime', required: false },
        'email': { typeName: 'string', required: true },
    },
};

export function RegisterRoutes(app: any) {
    app.get('/Accounts/Current', function(req: any, res: any) {
        const params = {
            'someFlag': { typeName: 'boolean', required: true },
        };

        let validatedParams: any[] = [];
        try {
            validatedParams = getValidatedParams(params, req, '');
        } catch (err) {
            res.status(err.status || 500);
            res.json(err);
            return;
        }

        const controller = new AccountsController();
        promiseHandler(controller.current.apply(controller, validatedParams), res);
    });
    app.get('/Accounts/Users', function(req: any, res: any) {
        const params = {
        };

        let validatedParams: any[] = [];
        try {
            validatedParams = getValidatedParams(params, req, '');
        } catch (err) {
            res.status(err.status || 500);
            res.json(err);
            return;
        }

        const controller = new AccountsController();
        promiseHandler(controller.getUsers.apply(controller, validatedParams), res);
    });
    app.get('/Users/Current', function(req: any, res: any) {
        const params = {
        };

        let validatedParams: any[] = [];
        try {
            validatedParams = getValidatedParams(params, req, '');
        } catch (err) {
            res.status(err.status || 500);
            res.json(err);
            return;
        }

        const controller = new UsersController();
        promiseHandler(controller.Current.apply(controller, validatedParams), res);
    });
    app.get('/Users/:userId', function(req: any, res: any) {
        const params = {
            'userId': { typeName: 'number', required: true },
        };

        let validatedParams: any[] = [];
        try {
            validatedParams = getValidatedParams(params, req, '');
        } catch (err) {
            res.status(err.status || 500);
            res.json(err);
            return;
        }

        const controller = new UsersController();
        promiseHandler(controller.Get.apply(controller, validatedParams), res);
    });
    app.post('/Users', function(req: any, res: any) {
        const params = {
            'request': { typeName: 'UserCreateRequest', required: true },
            'optionalString': { typeName: 'string', required: false },
        };

        let validatedParams: any[] = [];
        try {
            validatedParams = getValidatedParams(params, req, 'request');
        } catch (err) {
            res.status(err.status || 500);
            res.json(err);
            return;
        }

        const controller = new UsersController();
        promiseHandler(controller.Create.apply(controller, validatedParams), res);
    });
    app.delete('/Users/:userId', function(req: any, res: any) {
        const params = {
            'userId': { typeName: 'number', required: true },
        };

        let validatedParams: any[] = [];
        try {
            validatedParams = getValidatedParams(params, req, '');
        } catch (err) {
            res.status(err.status || 500);
            res.json(err);
            return;
        }

        const controller = new UsersController();
        promiseHandler(controller.Delete.apply(controller, validatedParams), res);
    });
    app.patch('/Users', function(req: any, res: any) {
        const params = {
            'request': { typeName: 'UserUpdateRequest', required: true },
        };

        let validatedParams: any[] = [];
        try {
            validatedParams = getValidatedParams(params, req, 'request');
        } catch (err) {
            res.status(err.status || 500);
            res.json(err);
            return;
        }

        const controller = new UsersController();
        promiseHandler(controller.Update.apply(controller, validatedParams), res);
    });

    function promiseHandler(promise: any, response: any) {
        return promise
            .then((data: any) => {
                if (data) {
                    response.json(data);
                } else {
                    response.status(204);
                    response.end();
                }
            })
            .catch((error: any) => {
                response.status(error.status || 500);
                response.json(error);
            });
    }

    function getRequestParams(request: any, bodyParamName?: string) {
        const merged: any = {};
        if (bodyParamName) {
            merged[bodyParamName] = request.body;
        }

        for (let attrname in request.params) { merged[attrname] = request.params[attrname]; }
        for (let attrname in request.query) { merged[attrname] = request.query[attrname]; }
        return merged;
    }

    function getValidatedParams(params: any, request: any, bodyParamName?: string): any[] {
        const requestParams = getRequestParams(request, bodyParamName);

        return Object.keys(params).map(key => {
            return ValidateParam(params[key], requestParams[key], models, key);
        });
    }
}
