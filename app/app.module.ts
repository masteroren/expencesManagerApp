import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {NativeScriptHttpModule} from "nativescript-angular/http";

import {AppComponent} from "./app.component";
import {ExpensesModule} from "./expenses";
import {UsersModule} from "./users";

import {appRoutes} from "./app.routing";

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(appRoutes),
        NativeScriptHttpModule,
        UsersModule,
        ExpensesModule,
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
