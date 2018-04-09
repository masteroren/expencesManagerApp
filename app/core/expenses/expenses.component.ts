import { Component, OnInit } from "@angular/core";
import cameraModule = require("nativescript-camera");

// Native Script core
import { RouterExtensions } from "nativescript-angular";
import { IEmployee } from "./../../interfaces/IEmployee";
import { ICategory } from "./../../interfaces/ICategory";

require("nativescript-localstorage");
import { isNullOrUndefined } from "utils/types";
import { Page } from "tns-core-modules/ui/page";
import { DataService } from "./../../shared_module/services/data.service";

@Component({
    moduleId: module.id,
    selector: 'app-expenses',
    templateUrl: "expenses.component.html",
    styleUrls: ['expenses.component.css']
})
export class ExpensesComponent implements OnInit {
    public employee: IEmployee;
    private minDate: Date = new Date();

    constructor(
        public page: Page,
        public dataService: DataService,
        public routerExtensions: RouterExtensions) {

        page.actionBarHidden = true;
    }

    ngOnInit() {
        if (localStorage.getItem('employee')) {
            this.employee = JSON.parse(localStorage.getItem('employee'));
        }
    }

    private logout() {
        localStorage.clear();
        this.routerExtensions.navigate(["users"]);
    }

    private sendInvoice() {

        let invoiceDate = this.dataService.expenseModel.invoiceDate ? this.dataService.expenseModel.invoiceDate : this.minDate;
        this.dataService.expenseModel.createDate = new Date().getTime();
        let cameraAvailable: Boolean = cameraModule.isAvailable();

        let valid = !isNullOrUndefined(this.dataService.category) &&
            !isNullOrUndefined(this.dataService.expenseModel.amount) &&
            this.dataService.expenseModel.amount != 0;

        this.dataService.expenseModel.empId = this.employee.id;
        this.dataService.expenseModel.empName = this.employee.name;

        if (valid) {
            this.dataService.uploadInvoice().subscribe(_ => {
                this.routerExtensions.navigate(["success"]);
            }, error => {
                console.log('error---->', error);
                this.routerExtensions.navigate(["failure"]);
            })
        } else {
            console.log('not Valid');
            this.routerExtensions.navigate(["failure"]);
        }
    }
}


