import {Component, OnInit} from "@angular/core";
import {Page} from "ui/page";
import {HttpService} from "../shared/services/httpService";
import cameraModule = require("camera");

// Native Script core
import {RouterExtensions} from "nativescript-angular";
import {IEmployee} from "../shared/interfaces/IEmployee";
import {ICategory} from "../shared/interfaces/ICategory";

require("nativescript-localstorage");
import {isNullOrUndefined} from "utils/types";

@Component({
    selector: 'app-expenses',
    templateUrl: "expenses/expenses.component.html",
    styleUrls: ['expenses/expenses.component.css'],
    providers: [HttpService]
})
export class ExpensesComponent implements OnInit {
    employee: IEmployee;
    category: ICategory;
    minDate: Date = new Date();
    amount: number;
    customType: string;
    invoiceDate: Date;
    base64StringImg: string = '';
    recipeNumber: string = '';

    constructor(private page: Page, private httpService: HttpService, private routerExtensions: RouterExtensions) {
        page.actionBarHidden = true;
    }

    ngOnInit() {
        if (localStorage.getItem('employee')) {
            this.employee = JSON.parse(localStorage.getItem('employee'));
        }
    }

    logout() {
        localStorage.clear();
        this.routerExtensions.navigate(["welcome"], {
            transition: {
                name: "flip"
            }
        });
    }

    setCustomType(value: string) {
        this.customType = value;
    }

    setAmount(amount) {
        this.amount = amount;
    }

    setCategory(category: ICategory) {
        this.category = category;
    }

    setDate(date: number) {
        this.invoiceDate = new Date(date);
    }

    setImage(imgString: string) {
        this.base64StringImg = imgString;
    }

    setRecipeNumber(recipeNumber: string) {
        this.recipeNumber = recipeNumber;
    }

    sendInvoice() {
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
            }).subscribe(data => {
                this.routerExtensions.navigate(["success"], {
                    transition: {
                        name: "flip"
                    }
                });
            }, error => {
                console.log('error---->', error);
                this.routerExtensions.navigate(["failure"], {
                    transition: {
                        name: "flip"
                    }
                });
            });
        } else {
            console.log('not Valid');
            this.routerExtensions.navigate(["failure"], {
                transition: {
                    name: "flip"
                }
            });
        }
    }
}


