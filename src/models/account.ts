import {User} from './user';

export interface TestAccount {
    id: number;
    address?: string;
    name: string;
    users?: User[];
    fields?: string[];
}
