import {Component, EventEmitter, Input, Output} from "@angular/core";
import {ICategory} from "../../shared/interfaces/ICategory";

@Component({
    selector: 'expense-amount',
    templateUrl: 'expenses/expense-amount/expense-amount.component.html',
    styleUrls: ['expenses/expense-amount/expense-amount.component.css']
})
export class ExpenseAmountComponent{

    @Input() amount: string;
    @Input() category: ICategory;
    @Output() onAmountChanged: EventEmitter<string> = new EventEmitter();

    amountChanged(value){
        this.onAmountChanged.emit(value);
    }
}