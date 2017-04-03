import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/platform";
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {NativeScriptHttpModule} from "nativescript-angular/http";

import {AppComponent} from "./app.component";
import {ExpensesModule} from "./expenses/expenses.module";
import {WelcomeModule} from "./welcome/welcome.module";

import {appRoutes} from "./app.routing";

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(appRoutes),
        NativeScriptHttpModule,
        WelcomeModule,
        ExpensesModule,
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
