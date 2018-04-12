import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http"
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

import { AppComponent } from "./app.component";
import { DataService } from "./shared_module/services/data.service";

import { appRoutes } from "./app.routing";
import { UsersModule } from './core/users/users.module';
import { ExpensesModule } from "./core/expenses";
import { LoggedInGuard } from "./shared_module/gurads/loggedIn.guard";

@NgModule({
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(appRoutes),
        NativeScriptHttpClientModule,
        UsersModule,
        ExpensesModule
    ],
    providers: [
        LoggedInGuard
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
