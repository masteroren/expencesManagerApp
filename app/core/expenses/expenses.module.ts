import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ExpensesComponent } from "./expenses.component";
import { ExpenseTypeComponent } from "./expense-type/expense-type.component";
import { ExpenseAmountComponent } from "./expense-amount/expense-amount.component";
import { ExpenseDatesComponent } from "./expense-dates/expense-dates.component";
import { ExpenseIdComponent } from "./expense-id/expense-id.component";
import { ExpenseImageComponent } from "./expense-image/expense-image.component";
import { SuccessComponent } from "./success/success.component";
import { FailureComponent } from "./failure/failure.component";
import { ExpenseCustomComponent } from "./expense-custom/expense-custome.component";
import { ExpensesService } from './../../shared_module/services/expenses.service';

@NgModule({
    declarations: [
        ExpensesComponent,
        ExpenseTypeComponent,
        ExpenseAmountComponent,
        ExpenseDatesComponent,
        ExpenseIdComponent,
        ExpenseImageComponent,
        ExpenseCustomComponent,
        SuccessComponent,
        FailureComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [ExpensesComponent],
    providers: [ExpensesService]
})
export class ExpensesModule {
}


