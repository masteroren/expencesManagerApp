import { Component, ElementRef, ViewChild } from "@angular/core";
import { ExpensesService } from "./../../../shared_module/services/expenses.service";

@Component({
    moduleId: module.id,
    selector: 'expense-dates',
    templateUrl: './expense-dates.component.html',
    styleUrls: ['./expense-dates.component.css']
})
export class ExpenseDatesComponent {

    @ViewChild('invoiceDate') invoiceDate: ElementRef;
    invDate: any;

    constructor(public expSrv: ExpensesService) { }

    ngAfterViewInit() {
        this.invDate = this.invoiceDate.nativeElement;
        this.invDate.date = new Date();
        this.invDate.minDate = new Date(2015, 12, 30);
        this.invDate.maxDate = new Date();
        this.expSrv.expenseModel.invoiceDate = this.invDate.date.getTime();
    }

    dateChanged(e) {
        console.log('Date Picker date changed => ', e.value);
        let currentDate = new Date();
        console.log('Current date => ', currentDate);
        if (currentDate < e.value) {
            console.log('Wrong date');
            this.invDate.android.date = currentDate;
            this.expSrv.expenseModel.invoiceDate = currentDate.getTime();
        }
        this.expSrv.expenseModel.invoiceDate = e.value.getTime();
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