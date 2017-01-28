import {Component, ViewChild, ElementRef} from "@angular/core";
import {Page} from "ui/page";
import {CheckBox} from 'nativescript-checkbox';
import {registerElement} from "nativescript-angular/element-registry";
registerElement("CheckBox", () => require("nativescript-checkbox").CheckBox);
import {HttpService} from "../shared/services/httpService";

// Native Script core
import imageModule = require("ui/image");
import cameraModule = require("camera");
import imageSource = require("image-source");
import fs = require("file-system");

require("nativescript-localstorage");

@Component({
    selector: 'app-expenses',
    templateUrl: "expenses/expenses.component.html",
    providers: [HttpService]
})
export class ExpensesComponent {
    recipeTypes: Array<RecipeType>;
    userName: string;

    @ViewChild("food") foodCheckBox: ElementRef;
    @ViewChild("parking") parkingCheckBox: ElementRef;
    @ViewChild("driving") drivingCheckBox: ElementRef;
    @ViewChild("other") otherCheckBox: ElementRef;

    constructor(private page: Page, private httpService: HttpService) {
        page.actionBar.title = 'Expenses Manager';
        let user = localStorage.getItem('user');
        if (user) {
            this.userName = JSON.parse(user).name;
        }
    }

    ngOnInit() {
        this.recipeTypes = [{
            index: 0,
            text: 'Food',
            checked: false,
            element: this.foodCheckBox
        }, {
            index: 1,
            text: 'Parking',
            checked: false,
            element: this.parkingCheckBox
        }, {
            index: 2,
            text: 'Driving',
            checked: false,
            element: this.drivingCheckBox
        }, {
            index: 3,
            text: 'Other',
            checked: false,
            element: this.otherCheckBox
        }];

        this.recipeTypes.forEach(item => {
            this.recipeTypes[item.index].element.nativeElement.on('tap', () => {
                this.onTapCheckBox(item.index);
            })
        });
    }

    onTapCheckBox(index: number) {
        this.recipeTypes.forEach(item => {
            if (item.index !== index) {
                this.recipeTypes[item.index].element.nativeElement.checked = false;
                this.recipeTypes[item.index].checked = false;
            }
        });
        this.recipeTypes[index].checked = true;
    }

    clear() {
        this.recipeTypes.forEach(item => {
            item.checked = false;
            item.element.nativeElement.checked = false;
        })
    }

    add(amount) {
        let checkedItems = this.recipeTypes.filter(item => {
            return item.checked;
        });

        if (checkedItems.length === 1 && amount !== '') {

            cameraModule.takePicture({width: 50, height: 50, keepAspectRatio: true}).then(picture => {

                this.httpService.upload({
                    user: this.userName,
                    category: checkedItems[0].text,
                    amount: amount,
                    // picture: picture
                })
                    .subscribe(response => {
                        console.log(response.invoices);
                        console.log(response.message);
                    });
            });
        }
    }
}

interface RecipeType {
    index: number;
    text: string;
    checked: boolean,
    element: ElementRef
}
