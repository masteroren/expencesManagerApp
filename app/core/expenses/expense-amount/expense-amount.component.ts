import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ICategory } from "./../../../interfaces/ICategory";
import { ExpensesService } from "./../../../shared_module/services/expenses.service";

@Component({
    moduleId: module.id,
    selector: 'expense-amount',
    templateUrl: './expense-amount.component.html',
    styleUrls: ['./expense-amount.component.css']
})
export class ExpenseAmountComponent {

    constructor(public expSrv: ExpensesService) {
    }

    amountChanged(value) {
        this.expSrv.expenseModel.amount = value;
    }
}