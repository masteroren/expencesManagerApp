import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from "@angular/core";

@Component({
    selector: 'expense-amount',
    templateUrl: 'expenses/expense-amount/expense-amount.component.html'
})
export class ExpenseAmountComponent{

    @Input() amount: string;
    @Output() onAmountChanged: EventEmitter<string> = new EventEmitter();

    amountChanged(value){
        this.onAmountChanged.emit(value);
    }
}