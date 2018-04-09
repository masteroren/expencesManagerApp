import { NgModule } from "@angular/core";
import { UsersComponent } from "./users.component";
import { CommonModule } from "@angular/common";
import { NativeScriptModule } from "nativescript-angular/nativescript.module"
import { DataService } from '../../shared_module/services/data.service';

@NgModule({
    declarations: [
        UsersComponent
    ],
    imports: [
        CommonModule,
        NativeScriptModule
    ],
    exports: [
        UsersComponent
    ],
    providers: [DataService]
})
export class UsersModule { }