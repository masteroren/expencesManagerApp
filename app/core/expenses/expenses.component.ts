import {Component, OnInit} from "@angular/core";
import {HttpService} from "./../../shared_module/services/httpService";
import cameraModule = require("nativescript-camera");

// Native Script core
import {RouterExtensions} from "nativescript-angular";
import {IEmployee} from "./../../interfaces/IEmployee";
import {ICategory} from "./../../interfaces/ICategory";

require("nativescript-localstorage");
import {isNullOrUndefined} from "utils/types";
import {Page} from "tns-core-modules/ui/page";

@Component({
    moduleId: module.id,
    selector: 'app-expenses',
    templateUrl: "./expenses.component.html",
    styleUrls: ['./expenses.component.css'],
    providers: [HttpService]
})
export class ExpensesComponent implements OnInit {
    private employee: IEmployee;
    private category: ICategory;
    private minDate: Date = new Date();
    private amount: number;
    private customType: string;
    private invoiceDate: Date;
    private base64StringImg: string = '';
    private recipeNumber: string = '';

    constructor(private page: Page, private httpService: HttpService, private routerExtensions: RouterExtensions) {
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

    private setCustomType(value: string) {
        this.customType = value;
    }

    private setAmount(amount) {
        this.amount = amount;
    }

    private setCategory(category: ICategory) {
        this.category = category;
    }

    private setDate(date: number) {
        this.invoiceDate = new Date(date);
    }

    private setImage(imgString: string) {
        this.base64StringImg = imgString;
    }

    private setRecipeNumber(recipeNumber: string) {
        this.recipeNumber = recipeNumber;
    }

    private sendInvoice() {
        let invDate = this.invoiceDate ? this.invoiceDate : this.minDate;
        let currentDate = new Date();
        let cameraAvailable: Boolean = cameraModule.isAvailable();

        let valid = !isNullOrUndefined(this.category) && !isNullOrUndefined(this.amount);
        if (cameraAvailable) {
            valid = valid && !isNullOrUndefined(this.base64StringImg);
        }

        if (valid) {
            this.httpService.upload({
                empId: this.employee.id,
                empName: this.employee.name,
                type: this.category.id === 0 ? this.customType : this.category.name,
                amount: this.amount,
                invoiceDate: invDate.getTime(),
                createDate: currentDate.getTime(),
                image: this.base64StringImg
            }).subscribe(_ => {
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


