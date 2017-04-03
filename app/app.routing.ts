import {ExpensesComponent} from "./expenses/expenses.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {SuccessComponent} from "./expenses/success/success.component";
import {FailureComponent} from "./expenses/failure/failure.component";

export const appRoutes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/welcome'
    },
    {
        path: 'welcome',
        component: WelcomeComponent
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