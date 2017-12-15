import { ExpensesService } from './../../shared_module/services/expenses.service';
import { NgModule } from "@angular/core";
import { UsersComponent } from "./users.component";
import { CommonModule } from "@angular/common";
import { NativeScriptModule } from "nativescript-angular/nativescript.module"

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
    providers: [ExpensesService]
})
export class UsersModule { }