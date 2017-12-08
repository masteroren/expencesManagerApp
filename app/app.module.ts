import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptHttpModule } from "nativescript-angular/http";

import { AppComponent } from "./app.component";
import { ExpensesModule } from "./core/expenses";

import { appRoutes } from "./app.routing";
import { UsersComponent } from "app/core/users/users.component";

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(appRoutes),
        NativeScriptHttpModule,
        UsersComponent
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
