import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/platform";
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {NativeScriptHttpModule} from "nativescript-angular/http";

import {AppComponent} from "./app.component";
import {routes} from "./app.routing";
import {LoginModule} from "./login/login.module";
import {ExpensesModule} from "./expenses/expenses.module";

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes),
        NativeScriptHttpModule,
        LoginModule,
        ExpensesModule
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
