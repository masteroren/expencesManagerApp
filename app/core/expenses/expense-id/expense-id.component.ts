import { Component } from "@angular/core";
import { DataService } from './../../../shared_module/services/data.service';

@Component({
    moduleId: module.id,
    selector: 'expense-id',
    templateUrl: './expense-id.component.html',
    styleUrls: ['./expense-id.component.css']
})
export class ExpenseIdComponent {

    constructor(public dataService: DataService) { }

    recipeNumberChanged(value) {
        this.dataService.expenseModel.empId = value;
    }
}