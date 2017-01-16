import {Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {ExpensesComponent} from "./expenses/expenses.component";

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'expenses', component: ExpensesComponent}
];