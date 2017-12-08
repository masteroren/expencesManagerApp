import {Component, EventEmitter, Input, Output} from "@angular/core";
import {ICategory} from "./../../../interfaces/ICategory";

@Component({
    moduleId: module.id,
    selector: 'expense-amount',
    templateUrl: './expense-amount.component.html',
    styleUrls: ['./expense-amount.component.css']
})
export class ExpenseAmountComponent{

    @Input() amount: string;
    @Input() category: ICategory;
    @Output() onAmountChanged: EventEmitter<string> = new EventEmitter();

    amountChanged(value){
        this.onAmountChanged.emit(value);
    }
}