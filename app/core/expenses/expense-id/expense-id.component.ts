import { Component } from "@angular/core";
import { ExpensesService } from "./../../../shared_module/services/expenses.service";

@Component({
    moduleId: module.id,
    selector: 'expense-id',
    templateUrl: './expense-id.component.html',
    styleUrls: ['./expense-id.component.css']
})
export class ExpenseIdComponent {

    constructor(public expSrv: ExpensesService) { }

    recipeNumberChanged(value) {
        this.expSrv.expenseModel.empId = value;
    }
}