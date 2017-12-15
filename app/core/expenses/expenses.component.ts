import { Component, OnInit } from "@angular/core";
import cameraModule = require("nativescript-camera");

// Native Script core
import { RouterExtensions } from "nativescript-angular";
import { IEmployee } from "./../../interfaces/IEmployee";
import { ICategory } from "./../../interfaces/ICategory";

require("nativescript-localstorage");
import { isNullOrUndefined } from "utils/types";
import { Page } from "tns-core-modules/ui/page";
import { ExpensesService } from "./../../shared_module/services/expenses.service";

@Component({
    moduleId: module.id,
    selector: 'app-expenses',
    templateUrl: "./expenses.component.html",
    styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
    public employee: IEmployee;
    private minDate: Date = new Date();

    constructor(
        public page: Page,
        public expSrv: ExpensesService,
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
        let invoiceDate = this.expSrv.expenseModel.invoiceDate ? this.expSrv.expenseModel.invoiceDate : this.minDate;
        this.expSrv.expenseModel.createDate = new Date().getTime();
        let cameraAvailable: Boolean = cameraModule.isAvailable();

        let valid = !isNullOrUndefined(this.expSrv.category) && !isNullOrUndefined(this.expSrv.expenseModel.amount);

        this.expSrv.expenseModel.empId = this.employee.id;
        this.expSrv.expenseModel.empName = this.employee.name;

        if (valid) {
            this.expSrv.uploadInvoice().subscribe(_ => {
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


