import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ICategory } from "./../../../interfaces/ICategory";
import { DataService } from "./../../../shared_module/services/data.service";

@Component({
    moduleId: module.id,
    selector: 'expense-amount',
    templateUrl: 'expense-amount.component.html',
    styleUrls: ['expense-amount.component.css']
})
export class ExpenseAmountComponent {

    constructor(public dataService: DataService) {
    }

    amountChanged(value) {
        this.dataService.expenseModel.amount = value;
    }
}