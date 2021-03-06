import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { DataService } from '../../shared_module/services/data.service';

import { ExpensesComponent } from "./expenses.component";
import { ExpenseTypeComponent } from "./expense-type/expense-type.component";
import { ExpenseAmountComponent } from "./expense-amount/expense-amount.component";
import { ExpenseDatesComponent } from "./expense-dates/expense-dates.component";
import { ExpenseIdComponent } from "./expense-id/expense-id.component";
import { ExpenseImageComponent } from "./expense-image/expense-image.component";
import { SuccessComponent } from "./success/success.component";
import { FailureComponent } from "./failure/failure.component";
import { ExpenseCustomComponent } from "./expense-custom/expense-custome.component";

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
    providers: [DataService]
})
export class ExpensesModule {
}


