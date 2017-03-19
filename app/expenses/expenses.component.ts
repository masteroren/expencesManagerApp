import {Component, ViewChild, ElementRef, OnInit} from "@angular/core";
import {Page} from "ui/page";
import {CheckBox} from 'nativescript-checkbox';
import {registerElement} from "nativescript-angular/element-registry";
registerElement("CheckBox", () => require("nativescript-checkbox").CheckBox);
import {HttpService} from "../shared/services/httpService";

// Native Script core
import imageModule = require("ui/image");
import cameraModule = require("camera");
import enumsModule  = require('ui/enums')
import fsModule = require("file-system");
import {RouterExtensions} from "nativescript-angular";
import {Color} from "color";
import {DatePicker} from "ui/date-picker";
import {IEmployee} from "../shared/interfaces/IEmployee";

let colorModule = require("color");

require("nativescript-localstorage");

@Component({
    selector: 'app-expenses',
    templateUrl: "expenses/expenses.component.html",
    providers: [HttpService]
})
export class ExpensesComponent implements OnInit {
    employee: IEmployee;
    imageSrc: any;

    expTypeIndex: number;
    category: string;

    minDate: Date = new Date(2000, 0, 1);

    defaultTypeColor: Color = new colorModule.Color('white');

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
            console.log('employee => ', this.employee.name);
        }
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

    onParkingTap(index: number) {
        this.resetAll();
        this.parking.nativeElement.backgroundColor = new colorModule.Color('#6495ed');
        this.expTypeIndex = index;
        this.category = 'Parking';
    }

    onFoodTap(index: number) {
        this.resetAll();
        this.food.nativeElement.backgroundColor = new colorModule.Color('#6495ed');
        this.expTypeIndex = index;
        this.category = 'Food';
    }

    onDrivingTap(index: number) {
        this.resetAll();
        this.driving.nativeElement.backgroundColor = new colorModule.Color('#6495ed');
        this.expTypeIndex = index;
        this.category = 'Driving';
    }

    onOtherTap(index: number) {
        this.resetAll();
        this.other.nativeElement.backgroundColor = new colorModule.Color('#6495ed');
        this.expTypeIndex = index;
        this.category = 'Other';
    }

    clear() {
        this.resetAll();
        this.amount.nativeElement.text = '';
    }

    add(amount) {

        let datePicker = <DatePicker>this.invoiceDate.nativeElement;
        let invDate = datePicker.date ? datePicker.date : this.minDate;

        cameraModule.takePicture({width: 50, height: 50, keepAspectRatio: true}).then(imageSource => {

            this.imageSrc = imageSource;

            let base64img = imageSource.toBase64String("jpg");
            let currentDate = new Date();

            console.log('employee name => ', this.employee.name);

            this.httpService.upload({
                empName: this.employee.name,
                type: this.category,
                amount: amount,
                invoiceDate: invDate.getTime(),
                createDate: currentDate.getTime(),
                image: base64img
            }).subscribe(data => {
                console.log(data);
            });

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
}


