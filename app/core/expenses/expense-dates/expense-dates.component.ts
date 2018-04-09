import { Component, ElementRef, ViewChild } from "@angular/core";
import { DataService } from "./../../../shared_module/services/data.service";

@Component({
    moduleId: module.id,
    selector: 'expense-dates',
    templateUrl: './expense-dates.component.html',
    styleUrls: ['./expense-dates.component.css']
})
export class ExpenseDatesComponent {

    @ViewChild('invoiceDate') invoiceDate: ElementRef;
    invDate: any;

    constructor(public dataService: DataService) { }

    ngAfterViewInit() {
        this.invDate = this.invoiceDate.nativeElement;
        this.invDate.date = new Date();
        this.invDate.minDate = new Date(2015, 12, 30);
        this.invDate.maxDate = new Date();
        this.dataService.expenseModel.invoiceDate = this.invDate.date.getTime();
    }

    dateChanged(e) {
        console.log('Date Picker date changed => ', e.value);
        let currentDate = new Date();
        console.log('Current date => ', currentDate);
        if (currentDate < e.value) {
            console.log('Wrong date');
            this.invDate.android.date = currentDate;
            this.dataService.expenseModel.invoiceDate = currentDate.getTime();
        }
        this.dataService.expenseModel.invoiceDate = e.value.getTime();
    }

    getMaxDate() {
        return new Date();
    }

    getMinDate() {
    }

    getCurrDate() {
        return new Date();
    }

}