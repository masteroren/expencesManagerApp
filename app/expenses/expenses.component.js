"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var element_registry_1 = require("nativescript-angular/element-registry");
var httpService_1 = require("../shared/services/httpService");
element_registry_1.registerElement("CheckBox", function () { return require("nativescript-checkbox").CheckBox; });
var cameraModule = require("camera");
var imageModule = require("ui/image");
var fs = require("file-system");
var appSettings = require("application-settings");
require("nativescript-localstorage");
var ExpensesComponent = (function () {
    function ExpensesComponent(page, httpService) {
        var _this = this;
        this.page = page;
        this.httpService = httpService;
        page.actionBar.title = 'Expenses Manager';
        var token = localStorage.getItem('token');
        this.httpService.get('auth', { token: token })
            .subscribe(function (response) {
            _this.userName = response.name;
            localStorage.setItem('name', response.name);
        });
    }
    ExpensesComponent.prototype.ngOnInit = function () {
        var _this = this;
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
        this.recipeTypes.forEach(function (item) {
            _this.recipeTypes[item.index].element.nativeElement.on('tap', function () {
                _this.onTapCheckBox(item.index);
            });
        });
    };
    ExpensesComponent.prototype.onTapCheckBox = function (index) {
        var _this = this;
        this.recipeTypes.forEach(function (item) {
            if (item.index !== index) {
                _this.recipeTypes[item.index].element.nativeElement.checked = false;
                _this.recipeTypes[item.index].checked = false;
            }
        });
        this.recipeTypes[index].checked = true;
    };
    ExpensesComponent.prototype.clear = function () {
        this.recipeTypes.forEach(function (item) {
            item.checked = false;
            item.element.nativeElement.checked = false;
        });
    };
    ExpensesComponent.prototype.add = function (amount) {
        var checkedItems = this.recipeTypes.filter(function (item) {
            return item.checked;
        });
        if (checkedItems.length !== 0 && amount !== '') {
            cameraModule.takePicture({ width: 50, height: 50, keepAspectRatio: false }).then(function (picture) {
                console.log("Result is an image source instance");
                // this.httpService.get('upload', {token: token})
                //     .subscribe(response => {
                //         this.userName = response.name;
                //     });
            });
        }
    };
    __decorate([
        core_1.ViewChild("food"), 
        __metadata('design:type', core_1.ElementRef)
    ], ExpensesComponent.prototype, "foodCheckBox", void 0);
    __decorate([
        core_1.ViewChild("parking"), 
        __metadata('design:type', core_1.ElementRef)
    ], ExpensesComponent.prototype, "parkingCheckBox", void 0);
    __decorate([
        core_1.ViewChild("driving"), 
        __metadata('design:type', core_1.ElementRef)
    ], ExpensesComponent.prototype, "drivingCheckBox", void 0);
    __decorate([
        core_1.ViewChild("other"), 
        __metadata('design:type', core_1.ElementRef)
    ], ExpensesComponent.prototype, "otherCheckBox", void 0);
    ExpensesComponent = __decorate([
        core_1.Component({
            selector: 'app-expenses',
            templateUrl: "expenses/expenses.component.html",
            providers: [httpService_1.HttpService]
        }), 
        __metadata('design:paramtypes', [page_1.Page, httpService_1.HttpService])
    ], ExpensesComponent);
    return ExpensesComponent;
}());
exports.ExpensesComponent = ExpensesComponent;
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
//# sourceMappingURL=expenses.component.js.map