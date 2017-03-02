import {Routes} from "@angular/router";
import {ExpensesComponent} from "./expenses/expenses.component";
import {WelcomeComponent} from "./welcome/welcome.component";

export const appRoutes: Routes = [
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
    }
];
