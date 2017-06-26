import {ExpensesComponent} from "./expenses/expenses.component";
import {UsersComponent} from "./users/users.component";
import {SuccessComponent} from "./expenses/success/success.component";
import {FailureComponent} from "./expenses/failure/failure.component";

export const appRoutes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/users'
    },
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'expenses',
        component: ExpensesComponent
    },
    {
        path: 'success',
        component: SuccessComponent
    },
    {
        path: 'failure',
        component: FailureComponent
    }
];