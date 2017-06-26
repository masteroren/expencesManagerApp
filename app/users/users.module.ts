import {NgModule} from "@angular/core";
import {NativeScriptFormsModule, NativeScriptRouterModule} from "nativescript-angular";
import {CommonModule} from "@angular/common";

import {UsersComponent} from "./users.component";
import {HttpService} from "../shared/services";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";

@NgModule({
    imports: [
        CommonModule,
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptFormsModule
    ],
    exports: [UsersComponent],
    declarations: [UsersComponent],
    providers: [HttpService],
})
export class UsersModule {

}