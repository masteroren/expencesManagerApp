import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/platform";
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {NativeScriptHttpModule} from "nativescript-angular/http";

import {AppComponent} from "./app.component";
import {ExpensesModule} from "./expenses/expenses.module";
import {WelcomeModule} from "./welcome/welcome.module";

import {ExpensesComponent} from "./expenses/expenses.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {FinishComponent} from "./expenses/finish/finish-step.component";

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot([
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
                path: 'finish/:id',
                component: FinishComponent
            }
        ]),
        NativeScriptHttpModule,
        WelcomeModule,
        ExpensesModule,
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
