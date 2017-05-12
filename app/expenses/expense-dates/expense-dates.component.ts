import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from "@angular/core";
import {ICategory} from "../../shared/interfaces/ICategory";

@Component({
    selector: 'expense-dates',
    templateUrl: 'expenses/expense-dates/expense-dates.component.html',
    styleUrls: ['expenses/expense-dates/expense-dates.component.css']
})
export class ExpenseDatesComponent {
    @Input() category: ICategory;
    @Output() onDateChanged: EventEmitter<number> = new EventEmitter();

    @ViewChild('invoiceDate') invoiceDate: ElementRef;
    invDate: any;

    ngAfterViewInit(){
        this.invDate = this.invoiceDate.nativeElement;
        this.invDate.date = new Date();
        // this.invDate.minDate = moment(new Date()).subtract(6, 'months');
        this.invDate.maxDate = new Date();

    }

    dateChanged(e) {
        console.log('Date Picker date changed => ', e.value);
        let currentDate = new Date();
        console.log('Current date => ', currentDate);
        if (currentDate < e.value){
            console.log('Wrong date');
            this.invDate.android.date = currentDate;
            this.onDateChanged.emit(currentDate.getTime());
        }
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