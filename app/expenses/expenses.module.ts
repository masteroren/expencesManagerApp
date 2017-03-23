import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";

import {ExpensesComponent} from "./expenses.component";
import {ExpenseTypeComponent} from "./expense-type/expense-type.component";
import {ExpenseAmountComponent} from "./expense-amount/expense-amount.component";
import {ExpenseDatesComponent} from "./expense-dates/expense-dates.component";

@NgModule({
    declarations: [
        ExpensesComponent,
        ExpenseTypeComponent,
        ExpenseAmountComponent,
        ExpenseDatesComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [ExpensesComponent]
})
export class ExpensesModule {
}
