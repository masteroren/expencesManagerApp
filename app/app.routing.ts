import { ExpensesComponent } from "./core/expenses/expenses.component";
import { UsersComponent } from "./core/users/users.component";
import { SuccessComponent } from "./core/expenses/success/success.component";
import { FailureComponent } from "./core/expenses/failure/failure.component";
import { LoggedInGuard } from "./shared_module/gurads/loggedIn.guard";

export const appRoutes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'expenses'
    },
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'expenses',
        component: ExpensesComponent,
        canActivate: [LoggedInGuard]
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