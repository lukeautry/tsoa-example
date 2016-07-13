import {Account} from '../models/account';
import {Route, Get} from 'tsoa';
import {User} from '../models/user';

@Route('Accounts')
export class AccountsController {
    /** Get the current account */
    @Get('Current')
    public async current(someFlag: boolean): Promise<Account> {
        return {
            id: 600,
            name: 'test'
        };
    }

    /** Get a list of users for the account */
    @Get('Users')
    public async getUsers(): Promise<User[]> {
        return [
            {
                email: 'test@test.com',
                id: 1
            },
            {
                email: 'test2@test2.com',
                id: 2
            }
        ];
    }
}
