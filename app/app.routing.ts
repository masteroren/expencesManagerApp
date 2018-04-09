import { ExpensesComponent } from "./core/expenses/expenses.component";
import { UsersComponent } from "./core/users/users.component";
import { SuccessComponent } from "./core/expenses/success/success.component";
import { FailureComponent } from "./core/expenses/failure/failure.component";
import { MenuComponent } from "./core/menu/menu.component";

export const appRoutes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'users'
    },
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'menu',
        component: MenuComponent
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