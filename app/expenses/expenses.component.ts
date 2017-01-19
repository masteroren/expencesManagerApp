import {Component, ViewChild, ElementRef} from "@angular/core";
import {Page} from "ui/page";
import observableArrayModule = require("data/observable-array");
import {CheckBox} from 'nativescript-checkbox';
import {registerElement} from "nativescript-angular/element-registry";
registerElement("CheckBox", () => require("nativescript-checkbox").CheckBox);

// Native Script core
let cameraModule = require("camera");
let fs = require("file-system");

require("nativescript-localstorage");

@Component({
    selector: 'app-expenses',
    templateUrl: "expenses/expenses.component.html"
})
export class ExpensesComponent {
    recipeTypes: Array<RecipeType>;
    userName: string;

    @ViewChild("food") foodCheckBox: ElementRef;
    @ViewChild("parking") parkingCheckBox: ElementRef;
    @ViewChild("driving") drivingCheckBox: ElementRef;
    @ViewChild("other") otherCheckBox: ElementRef;

    constructor(private page: Page) {
        page.actionBar.title = 'Expenses Manager';
        let user = localStorage.getItem('user');
        if (user){
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
        })
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

        if (checkedItems.length !== 0 && amount !== '') {

            cameraModule.takePicture({width: 50, height: 50, keepAspectRatio: false, saveToGallery: true}).then(picture => {

                // this.httpService.get('upload', {})
                //     .subscribe(response => {
                //     });
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


// var cameraModule = require('camera');
//
// var some_url="http://somesite";
// // img is a image source
// cameraModule.takePicture().then(function (img) {
//     // You can use "jpeg" or "png".   Apparently "png" doesn't work in some
//     // cases on iOS.
//     var imageData = img.toBase64String("jpeg");
//
//     http.request({
//         url: some_url,
//         method: "POST",
//         headers: { "Content-Type": "application/base64" },
//         content: imageData
//     }).then(function() {
//         console.log("Woo Hoo, we sent our image up to the server!");
//     }).catch(function(e) {
//         console.log("Uh oh, something went wrong", e);
//     });
// });
