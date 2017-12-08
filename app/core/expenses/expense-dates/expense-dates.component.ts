import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from "@angular/core";
import {ICategory} from "./../../../interfaces/ICategory";

@Component({
    moduleId: module.id,
    selector: 'expense-dates',
    templateUrl: './expense-dates.component.html',
    styleUrls: ['./expense-dates.component.css']
})
export class ExpenseDatesComponent {
    @Input() category: ICategory;
    @Output() onDateChanged: EventEmitter<number> = new EventEmitter();

    @ViewChild('invoiceDate') invoiceDate: ElementRef;
    invDate: any;

    ngAfterViewInit(){
        this.invDate = this.invoiceDate.nativeElement;
        this.invDate.date = new Date();
        this.invDate.minDate = new Date(2015,12,30);
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