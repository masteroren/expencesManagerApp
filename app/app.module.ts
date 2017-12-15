import { UsersModule } from './core/users/users.module';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptHttpModule } from "nativescript-angular/http";

import { AppComponent } from "./app.component";
import { ExpensesModule } from "./core/expenses";

import { appRoutes } from "./app.routing";
import { HttpService } from './shared_module/services';

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(appRoutes),
        NativeScriptHttpModule,
        UsersModule,
        ExpensesModule
    ],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [HttpService]
})
export class AppModule {
}
