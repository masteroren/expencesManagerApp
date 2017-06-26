import {NgModule} from "@angular/core";
import {NativeScriptFormsModule, NativeScriptRouterModule, NativeScriptModule} from "nativescript-angular";
import {CommonModule} from "@angular/common";

import {UsersComponent} from "./users.component";
import {HttpService} from "../shared/services";

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