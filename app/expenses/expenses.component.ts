import {Component, ViewChild, ElementRef, OnInit} from "@angular/core";
import {Page} from "ui/page";
import {HttpService} from "../shared/services/httpService";

// Native Script core
import cameraModule = require("camera");
import {RouterExtensions} from "nativescript-angular";
import {DatePicker} from "ui/date-picker";
import {IEmployee} from "../shared/interfaces/IEmployee";

require("nativescript-localstorage");

@Component({
    selector: 'app-expenses',
    templateUrl: "expenses/expenses.component.html",
    styleUrls: ['expenses/expenses.component.css'],
    providers: [HttpService]
})
export class ExpensesComponent implements OnInit {
    employee: IEmployee;
    imageSrc: any;
    category: string;
    minDate: Date = new Date();
    cameraAvailable: Boolean = cameraModule.isAvailable();
    amount: number;
    invoiceDate: Date;
    base64StringImg: string = '';

    constructor(private page: Page, private httpService: HttpService, private routerExtensions: RouterExtensions) {
        page.actionBarHidden = true;
    }

    ngOnInit() {
        if (localStorage.getItem('employee')) {
            this.employee = JSON.parse(localStorage.getItem('employee'));
        }
        console.log('camera available => ', cameraModule.isAvailable())
    }

    // clear() {
    //     this.resetAll();
    //     this.amount.nativeElement.text = '';
    // }

    setAmount(amount) {
        this.amount = amount;
        console.log('Amount => ', this.amount);
    }

    setCategory(e) {
        this.category = e;
        console.log('Category selected => ', this.category);
    }

    setDate(date) {
        this.invoiceDate = date;
        console.log('Date => ', this.invoiceDate);
    }

    takePicture() {
        if (this.cameraAvailable) {
            cameraModule.takePicture({width: 50, height: 50, keepAspectRatio: true}).then(imageSource => {
                this.imageSrc = imageSource;
                this.base64StringImg = imageSource.toBase64String("jpg");
            });
        }
    }

    sendInvoice() {
        let invDate = this.invoiceDate ? this.invoiceDate : this.minDate;
        let currentDate = new Date();

        this.httpService.upload({
            empName: this.employee.name,
            type: this.category,
            amount: this.amount,
            invoiceDate: invDate.getTime(),
            createDate: currentDate.getTime(),
            image: this.base64StringImg
        }).subscribe(data => {
            console.log(data);
        });
    }

    logOut() {
        localStorage.removeItem('employee');

        this.routerExtensions.navigate(["/welcome"], {
            transition: {
                name: "flip"
            }
        });
    }

    onTap() {
    }
}


