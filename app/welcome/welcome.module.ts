import {NgModule} from "@angular/core";
import {NativeScriptFormsModule, NativeScriptRouterModule, NativeScriptModule} from "nativescript-angular";
import {CommonModule} from "@angular/common";

import {WelcomeComponent} from "./welcome.component";
import {HttpService} from "../shared/services/httpService";

@NgModule({
    declarations: [WelcomeComponent],
    imports: [
        CommonModule,
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptFormsModule
    ],
    providers: [HttpService],
    exports: [WelcomeComponent]
})
export class WelcomeModule {

}