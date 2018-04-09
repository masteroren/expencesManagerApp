import { DataService } from './../../../shared_module/services/data.service';
import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'expense-custom',
    templateUrl: 'expense-custom.component.html',
    styleUrls: ['expense-custom.component.css']
})
export class ExpenseCustomComponent {

    constructor(public dataService: DataService) { }

    textChange(value: string) {
        this.dataService.expenseModel.type = value;
    }
}