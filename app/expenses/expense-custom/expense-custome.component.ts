import {Component, EventEmitter, Input, Output} from "@angular/core";
import {ICategory} from "../../shared/interfaces/ICategory";

@Component({
    selector: 'expense-custom',
    templateUrl: 'expenses/expense-custom/expense-custom.component.html',
    styleUrls: ['expenses/expense-custom/expense-custom.component.css']
})
export class ExpenseCustomComponent {

    @Input() type: string;
    @Input() category: ICategory;
    @Output() onTypeChanged: EventEmitter<string> = new EventEmitter();

    typeChanged(value){
        this.onTypeChanged.emit(value);
    }
}