import {Component, EventEmitter, Output} from "@angular/core";

@Component({
    selector: 'expense-dates',
    templateUrl: 'expenses/expense-dates/expense-dates.component.html'
})
export class ExpenseDatesComponent{
    @Output() onDateChanged: EventEmitter<Date> = new EventEmitter();
    minDate: Date = new Date();

    getDate() {
        return new Date().toDateString();
    }

    dateChanged(e){
        this.onDateChanged.emit(e.value);
    }

}