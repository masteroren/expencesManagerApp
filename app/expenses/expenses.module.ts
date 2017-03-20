import {NgModule} from '@angular/core';
import {ExpensesComponent} from "./expenses.component";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [ExpensesComponent],
    imports: [
        CommonModule
    ],
    exports: [ExpensesComponent]
})
export class ExpensesModule {
}
