import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {ICategory} from "../../shared/interfaces/ICategory";

@Component({
    selector: 'expense-dates',
    templateUrl: 'expenses/expense-dates/expense-dates.component.html',
    styleUrls: ['expenses/expense-dates/expense-dates.component.css']
})
export class ExpenseDatesComponent {
    @Input() category: ICategory;
    @Output() onDateChanged: EventEmitter<Date> = new EventEmitter();

    dateChanged(e) {
        this.onDateChanged.emit(e.value);
    }

    getMaxDate() {
        return new Date();
    }

    getMinDate() {
    }

    getCurrDate(){
        return new Date();
    }

}