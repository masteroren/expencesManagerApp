import {Component, ViewChild, ElementRef, OnInit} from "@angular/core";
import {Page} from "ui/page";
import {HttpService} from "../shared/services/httpService";

// Native Script core
import cameraModule = require("camera");
import {RouterExtensions} from "nativescript-angular";
import {Color} from "color";
import {DatePicker} from "ui/date-picker";
import {IEmployee} from "../shared/interfaces/IEmployee";

let colorModule = require("color");

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
    defaultTypeColor: Color = new colorModule.Color('white');
    cameraAvailable: Boolean = cameraModule.isAvailable();

    @ViewChild("food") food: ElementRef;
    @ViewChild("parking") parking: ElementRef;
    @ViewChild("driving") driving: ElementRef;
    @ViewChild("other") other: ElementRef;
    @ViewChild("invoiceDate") invoiceDate: ElementRef;
    @ViewChild("amount") amount: ElementRef;

    constructor(private page: Page, private httpService: HttpService, private routerExtensions: RouterExtensions) {
        page.actionBarHidden = true;
    }

    ngOnInit() {
        if (localStorage.getItem('employee')) {
            this.employee = JSON.parse(localStorage.getItem('employee'));
        }
        console.log('camera available => ', cameraModule.isAvailable())
    }

    getDate() {
        return new Date().toDateString();
    }

    private resetAll() {
        this.driving.nativeElement.backgroundColor = this.defaultTypeColor;
        this.food.nativeElement.backgroundColor = this.defaultTypeColor;
        this.parking.nativeElement.backgroundColor = this.defaultTypeColor;
        this.other.nativeElement.backgroundColor = this.defaultTypeColor;
    }

    onParkingTap() {
        this.resetAll();
        this.parking.nativeElement.backgroundColor = new colorModule.Color('#6495ed');
        this.category = 'Parking';
    }

    onFoodTap() {
        this.resetAll();
        this.food.nativeElement.backgroundColor = new colorModule.Color('#6495ed');
        this.category = 'Food';
    }

    onDrivingTap() {
        this.resetAll();
        this.driving.nativeElement.backgroundColor = new colorModule.Color('#6495ed');
        this.category = 'Driving';
    }

    onOtherTap() {
        this.resetAll();
        this.other.nativeElement.backgroundColor = new colorModule.Color('#6495ed');
        this.category = 'Other';
    }

    clear() {
        this.resetAll();
        this.amount.nativeElement.text = '';
    }

    add(amount) {
        if (this.cameraAvailable){
            cameraModule.takePicture({width: 50, height: 50, keepAspectRatio: true}).then(imageSource => {
                this.imageSrc = imageSource;
                let base64img = imageSource.toBase64String("jpg");
                this.uploadInvoice(amount, base64img);
            });
        } else {
            this.uploadInvoice(amount, '');
        }
    }

    private uploadInvoice(amount, img){
        let datePicker = <DatePicker>this.invoiceDate.nativeElement;
        let invDate = datePicker.date ? datePicker.date : this.minDate;
        let currentDate = new Date();

        this.httpService.upload({
            empName: this.employee.name,
            type: this.category,
            amount: amount,
            invoiceDate: invDate.getTime(),
            createDate: currentDate.getTime(),
            image: img
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


