import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {NativeScriptFormsModule} from "nativescript-angular/forms";
import {LoginComponent} from './login.component';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        NativeScriptRouterModule,
        NativeScriptFormsModule
    ],
    exports: [LoginComponent]
})
export class LoginModule {
}
