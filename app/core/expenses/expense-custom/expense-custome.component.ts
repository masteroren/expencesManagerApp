import { ExpensesService } from './../../../shared_module/services/expenses.service';
import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'expense-custom',
    templateUrl: './expense-custom.component.html',
    styleUrls: ['./expense-custom.component.css']
})
export class ExpenseCustomComponent {

    constructor(public expSrv: ExpensesService) { }

    textChange(value: string) {
        this.expSrv.expenseModel.type = value;
    }
}