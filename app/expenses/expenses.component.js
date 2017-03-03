"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("CheckBox", function () { return require("nativescript-checkbox").CheckBox; });
var httpService_1 = require("../shared/services/httpService");
var cameraModule = require("camera");
var nativescript_angular_1 = require("nativescript-angular");
var colorModule = require("color");
require("nativescript-localstorage");
var ExpensesComponent = (function () {
    function ExpensesComponent(page, httpService, routerExtensions) {
        this.page = page;
        this.httpService = httpService;
        this.routerExtensions = routerExtensions;
        this.minDate = new Date(2000, 0, 1);
        this.defaultTypeColor = new colorModule.Color('white');
        page.actionBarHidden = true;
        var employee = localStorage.getItem('employee');
        if (employee) {
            this.userName = JSON.parse(employee).name;
        }
    }
    ExpensesComponent.prototype.getDate = function () {
        return new Date().toDateString();
    };
    ExpensesComponent.prototype.ngOnInit = function () {
        // this.recipeTypes = [{
        //     index: 0,
        //     text: 'Food',
        //     checked: false,
        //     element: this.foodCheckBox
        // }, {
        //     index: 1,
        //     text: 'Parking',
        //     checked: false,
        //     element: this.parkingCheckBox
        // }, {
        //     index: 2,
        //     text: 'Driving',
        //     checked: false,
        //     element: this.drivingCheckBox
        // }, {
        //     index: 3,
        //     text: 'Other',
        //     checked: false,
        //     element: this.otherCheckBox
        // }];
        // this.recipeTypes.forEach(item => {
        //     this.recipeTypes[item.index].element.nativeElement.on('tap', () => {
        //         this.onTapCheckBox(item.index);
        //     })
        // });
    };
    ExpensesComponent.prototype.resetAll = function () {
        this.driving.nativeElement.backgroundColor = this.defaultTypeColor;
        this.food.nativeElement.backgroundColor = this.defaultTypeColor;
        this.parking.nativeElement.backgroundColor = this.defaultTypeColor;
        this.other.nativeElement.backgroundColor = this.defaultTypeColor;
    };
    ExpensesComponent.prototype.onParkingTap = function (index) {
        this.resetAll();
        this.parking.nativeElement.backgroundColor = new colorModule.Color('#6495ed');
        this.expTypeIndex = index;
        this.category = 'Parking';
    };
    ExpensesComponent.prototype.onFoodTap = function (index) {
        this.resetAll();
        this.food.nativeElement.backgroundColor = new colorModule.Color('#6495ed');
        this.expTypeIndex = index;
        this.category = 'Food';
    };
    ExpensesComponent.prototype.onDrivingTap = function (index) {
        this.resetAll();
        this.driving.nativeElement.backgroundColor = new colorModule.Color('#6495ed');
        this.expTypeIndex = index;
        this.category = 'Driving';
    };
    ExpensesComponent.prototype.onOtherTap = function (index) {
        this.resetAll();
        this.other.nativeElement.backgroundColor = new colorModule.Color('#6495ed');
        this.expTypeIndex = index;
        this.category = 'Other';
    };
    ExpensesComponent.prototype.onTapCheckBox = function (index) {
        // this.recipeTypes.forEach(item => {
        //     if (item.index !== index) {
        //         this.recipeTypes[item.index].element.nativeElement.checked = false;
        //         this.recipeTypes[item.index].checked = false;
        //     }
        // });
        // this.recipeTypes[index].checked = true;
    };
    ExpensesComponent.prototype.clear = function () {
        // this.recipeTypes.forEach(item => {
        //     item.checked = false;
        //     item.element.nativeElement.checked = false;
        // })
    };
    ExpensesComponent.prototype.add = function (amount) {
        var _this = this;
        var datePicker = this.invoiceDate.nativeElement;
        var invDate = datePicker.date ? datePicker.date : this.minDate;
        cameraModule.takePicture({ width: 50, height: 50, keepAspectRatio: true }).then(function (imageSource) {
            _this.imageSrc = imageSource;
            var base64img = imageSource.toBase64String("jpg");
            _this.httpService.upload({
                user: _this.userName,
                category: _this.category,
                amount: amount,
                invoiceDate: invDate.toISOString(),
                picture: base64img
            }).then(function (response) {
                var result = response.content.toJSON();
                console.log(result);
            }, function (e) {
                console.log("Error occurred " + e);
            });
        });
    };
    ExpensesComponent.prototype.logOut = function () {
        localStorage.removeItem('employee');
        this.routerExtensions.navigate(["/welcome"], {
            transition: {
                name: "flip"
            }
        });
    };
    __decorate([
        core_1.ViewChild("food"), 
        __metadata('design:type', core_1.ElementRef)
    ], ExpensesComponent.prototype, "food", void 0);
    __decorate([
        core_1.ViewChild("parking"), 
        __metadata('design:type', core_1.ElementRef)
    ], ExpensesComponent.prototype, "parking", void 0);
    __decorate([
        core_1.ViewChild("driving"), 
        __metadata('design:type', core_1.ElementRef)
    ], ExpensesComponent.prototype, "driving", void 0);
    __decorate([
        core_1.ViewChild("other"), 
        __metadata('design:type', core_1.ElementRef)
    ], ExpensesComponent.prototype, "other", void 0);
    __decorate([
        core_1.ViewChild("invoiceDate"), 
        __metadata('design:type', core_1.ElementRef)
    ], ExpensesComponent.prototype, "invoiceDate", void 0);
    ExpensesComponent = __decorate([
        core_1.Component({
            selector: 'app-expenses',
            templateUrl: "expenses/expenses.component.html",
            providers: [httpService_1.HttpService]
        }), 
        __metadata('design:paramtypes', [page_1.Page, httpService_1.HttpService, nativescript_angular_1.RouterExtensions])
    ], ExpensesComponent);
    return ExpensesComponent;
}());
exports.ExpensesComponent = ExpensesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwZW5zZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXhwZW5zZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBdUQsZUFBZSxDQUFDLENBQUE7QUFDdkUscUJBQW1CLFNBQVMsQ0FBQyxDQUFBO0FBRTdCLGlDQUE4Qix1Q0FBdUMsQ0FBQyxDQUFBO0FBQ3RFLGtDQUFlLENBQUMsVUFBVSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxRQUFRLEVBQXpDLENBQXlDLENBQUMsQ0FBQztBQUM3RSw0QkFBMEIsZ0NBQWdDLENBQUMsQ0FBQTtBQUkzRCxJQUFPLFlBQVksV0FBVyxRQUFRLENBQUMsQ0FBQztBQUd4QyxxQ0FBK0Isc0JBQXNCLENBQUMsQ0FBQTtBQUl0RCxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFbkMsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFPckM7SUFrQkksMkJBQW9CLElBQVUsRUFBVSxXQUF3QixFQUFVLGdCQUFrQztRQUF4RixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBVjVHLFlBQU8sR0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBRW5DLHFCQUFnQixHQUFVLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQVNyRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLFFBQVEsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hELEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDWCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzlDLENBQUM7SUFDTCxDQUFDO0lBRUQsbUNBQU8sR0FBUDtRQUNJLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0ksd0JBQXdCO1FBQ3hCLGdCQUFnQjtRQUNoQixvQkFBb0I7UUFDcEIsc0JBQXNCO1FBQ3RCLGlDQUFpQztRQUNqQyxPQUFPO1FBQ1AsZ0JBQWdCO1FBQ2hCLHVCQUF1QjtRQUN2QixzQkFBc0I7UUFDdEIsb0NBQW9DO1FBQ3BDLE9BQU87UUFDUCxnQkFBZ0I7UUFDaEIsdUJBQXVCO1FBQ3ZCLHNCQUFzQjtRQUN0QixvQ0FBb0M7UUFDcEMsT0FBTztRQUNQLGdCQUFnQjtRQUNoQixxQkFBcUI7UUFDckIsc0JBQXNCO1FBQ3RCLGtDQUFrQztRQUNsQyxNQUFNO1FBRU4scUNBQXFDO1FBQ3JDLDJFQUEyRTtRQUMzRSwwQ0FBMEM7UUFDMUMsU0FBUztRQUNULE1BQU07SUFDVixDQUFDO0lBRU8sb0NBQVEsR0FBaEI7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDaEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUNuRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQ3JFLENBQUM7SUFFRCx3Q0FBWSxHQUFaLFVBQWEsS0FBYTtRQUN0QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsZUFBZSxHQUFHLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztJQUM5QixDQUFDO0lBRUQscUNBQVMsR0FBVCxVQUFVLEtBQWE7UUFDbkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsR0FBRyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7SUFDM0IsQ0FBQztJQUVELHdDQUFZLEdBQVosVUFBYSxLQUFhO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxlQUFlLEdBQUcsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO0lBQzlCLENBQUM7SUFFRCxzQ0FBVSxHQUFWLFVBQVcsS0FBYTtRQUNwQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsZUFBZSxHQUFHLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUM1QixDQUFDO0lBRUQseUNBQWEsR0FBYixVQUFjLEtBQWE7UUFDdkIscUNBQXFDO1FBQ3JDLGtDQUFrQztRQUNsQyw4RUFBOEU7UUFDOUUsd0RBQXdEO1FBQ3hELFFBQVE7UUFDUixNQUFNO1FBQ04sMENBQTBDO0lBQzlDLENBQUM7SUFFRCxpQ0FBSyxHQUFMO1FBQ0kscUNBQXFDO1FBQ3JDLDRCQUE0QjtRQUM1QixrREFBa0Q7UUFDbEQsS0FBSztJQUNULENBQUM7SUFFRCwrQkFBRyxHQUFILFVBQUksTUFBTTtRQUFWLGlCQXdCQztRQXRCRyxJQUFJLFVBQVUsR0FBZSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztRQUM1RCxJQUFJLE9BQU8sR0FBRyxVQUFVLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUUvRCxZQUFZLENBQUMsV0FBVyxDQUFDLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLFdBQVc7WUFFckYsS0FBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7WUFFNUIsSUFBSSxTQUFTLEdBQUcsV0FBVyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUVsRCxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztnQkFDcEIsSUFBSSxFQUFFLEtBQUksQ0FBQyxRQUFRO2dCQUNuQixRQUFRLEVBQUUsS0FBSSxDQUFDLFFBQVE7Z0JBQ3ZCLE1BQU0sRUFBRSxNQUFNO2dCQUNkLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVyxFQUFFO2dCQUNsQyxPQUFPLEVBQUUsU0FBUzthQUNyQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUTtnQkFDWixJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hCLENBQUMsRUFBRSxVQUFBLENBQUM7Z0JBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN2QyxDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGtDQUFNLEdBQU47UUFDSSxZQUFZLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXBDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN6QyxVQUFVLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLE1BQU07YUFDZjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUF0SUQ7UUFBQyxnQkFBUyxDQUFDLE1BQU0sQ0FBQzs7bURBQUE7SUFDbEI7UUFBQyxnQkFBUyxDQUFDLFNBQVMsQ0FBQzs7c0RBQUE7SUFDckI7UUFBQyxnQkFBUyxDQUFDLFNBQVMsQ0FBQzs7c0RBQUE7SUFDckI7UUFBQyxnQkFBUyxDQUFDLE9BQU8sQ0FBQzs7b0RBQUE7SUFDbkI7UUFBQyxnQkFBUyxDQUFDLGFBQWEsQ0FBQzs7MERBQUE7SUFyQjdCO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSxrQ0FBa0M7WUFDL0MsU0FBUyxFQUFFLENBQUMseUJBQVcsQ0FBQztTQUMzQixDQUFDOzt5QkFBQTtJQW9KRix3QkFBQztBQUFELENBQUMsQUFuSkQsSUFtSkM7QUFuSlkseUJBQWlCLG9CQW1KN0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQge0NoZWNrQm94fSBmcm9tICduYXRpdmVzY3JpcHQtY2hlY2tib3gnO1xyXG5pbXBvcnQge3JlZ2lzdGVyRWxlbWVudH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcclxucmVnaXN0ZXJFbGVtZW50KFwiQ2hlY2tCb3hcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jaGVja2JveFwiKS5DaGVja0JveCk7XHJcbmltcG9ydCB7SHR0cFNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvc2VydmljZXMvaHR0cFNlcnZpY2VcIjtcclxuXHJcbi8vIE5hdGl2ZSBTY3JpcHQgY29yZVxyXG5pbXBvcnQgaW1hZ2VNb2R1bGUgPSByZXF1aXJlKFwidWkvaW1hZ2VcIik7XHJcbmltcG9ydCBjYW1lcmFNb2R1bGUgPSByZXF1aXJlKFwiY2FtZXJhXCIpO1xyXG5pbXBvcnQgZW51bXNNb2R1bGUgID0gcmVxdWlyZSgndWkvZW51bXMnKVxyXG5pbXBvcnQgZnNNb2R1bGUgPSByZXF1aXJlKFwiZmlsZS1zeXN0ZW1cIik7XHJcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XHJcbmltcG9ydCB7Q29sb3J9IGZyb20gXCJjb2xvclwiO1xyXG5pbXBvcnQge0RhdGVQaWNrZXJ9IGZyb20gXCJ1aS9kYXRlLXBpY2tlclwiO1xyXG5cclxubGV0IGNvbG9yTW9kdWxlID0gcmVxdWlyZShcImNvbG9yXCIpO1xyXG5cclxucmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1sb2NhbHN0b3JhZ2VcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLWV4cGVuc2VzJyxcclxuICAgIHRlbXBsYXRlVXJsOiBcImV4cGVuc2VzL2V4cGVuc2VzLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBwcm92aWRlcnM6IFtIdHRwU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEV4cGVuc2VzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIC8vIHJlY2lwZVR5cGVzOiBBcnJheTxSZWNpcGVUeXBlPjtcclxuICAgIHVzZXJOYW1lOiBzdHJpbmc7XHJcbiAgICBpbWFnZVNyYzogYW55O1xyXG5cclxuICAgIGV4cFR5cGVJbmRleDogbnVtYmVyO1xyXG4gICAgY2F0ZWdvcnk6IHN0cmluZztcclxuXHJcbiAgICBtaW5EYXRlOiBEYXRlID0gbmV3IERhdGUoMjAwMCwwLDEpO1xyXG5cclxuICAgIGRlZmF1bHRUeXBlQ29sb3I6IENvbG9yID0gbmV3IGNvbG9yTW9kdWxlLkNvbG9yKCd3aGl0ZScpO1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoXCJmb29kXCIpIGZvb2Q6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKFwicGFya2luZ1wiKSBwYXJraW5nOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZChcImRyaXZpbmdcIikgZHJpdmluZzogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoXCJvdGhlclwiKSBvdGhlcjogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoXCJpbnZvaWNlRGF0ZVwiKSBpbnZvaWNlRGF0ZTogRWxlbWVudFJlZjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgaHR0cFNlcnZpY2U6IEh0dHBTZXJ2aWNlLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcclxuICAgICAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgbGV0IGVtcGxveWVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VtcGxveWVlJyk7XHJcbiAgICAgICAgaWYgKGVtcGxveWVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlck5hbWUgPSBKU09OLnBhcnNlKGVtcGxveWVlKS5uYW1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXREYXRlKCl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5yZWNpcGVUeXBlcyA9IFt7XHJcbiAgICAgICAgLy8gICAgIGluZGV4OiAwLFxyXG4gICAgICAgIC8vICAgICB0ZXh0OiAnRm9vZCcsXHJcbiAgICAgICAgLy8gICAgIGNoZWNrZWQ6IGZhbHNlLFxyXG4gICAgICAgIC8vICAgICBlbGVtZW50OiB0aGlzLmZvb2RDaGVja0JveFxyXG4gICAgICAgIC8vIH0sIHtcclxuICAgICAgICAvLyAgICAgaW5kZXg6IDEsXHJcbiAgICAgICAgLy8gICAgIHRleHQ6ICdQYXJraW5nJyxcclxuICAgICAgICAvLyAgICAgY2hlY2tlZDogZmFsc2UsXHJcbiAgICAgICAgLy8gICAgIGVsZW1lbnQ6IHRoaXMucGFya2luZ0NoZWNrQm94XHJcbiAgICAgICAgLy8gfSwge1xyXG4gICAgICAgIC8vICAgICBpbmRleDogMixcclxuICAgICAgICAvLyAgICAgdGV4dDogJ0RyaXZpbmcnLFxyXG4gICAgICAgIC8vICAgICBjaGVja2VkOiBmYWxzZSxcclxuICAgICAgICAvLyAgICAgZWxlbWVudDogdGhpcy5kcml2aW5nQ2hlY2tCb3hcclxuICAgICAgICAvLyB9LCB7XHJcbiAgICAgICAgLy8gICAgIGluZGV4OiAzLFxyXG4gICAgICAgIC8vICAgICB0ZXh0OiAnT3RoZXInLFxyXG4gICAgICAgIC8vICAgICBjaGVja2VkOiBmYWxzZSxcclxuICAgICAgICAvLyAgICAgZWxlbWVudDogdGhpcy5vdGhlckNoZWNrQm94XHJcbiAgICAgICAgLy8gfV07XHJcblxyXG4gICAgICAgIC8vIHRoaXMucmVjaXBlVHlwZXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5yZWNpcGVUeXBlc1tpdGVtLmluZGV4XS5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQub24oJ3RhcCcsICgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMub25UYXBDaGVja0JveChpdGVtLmluZGV4KTtcclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc2V0QWxsKCkge1xyXG4gICAgICAgIHRoaXMuZHJpdmluZy5uYXRpdmVFbGVtZW50LmJhY2tncm91bmRDb2xvciA9IHRoaXMuZGVmYXVsdFR5cGVDb2xvcjtcclxuICAgICAgICB0aGlzLmZvb2QubmF0aXZlRWxlbWVudC5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLmRlZmF1bHRUeXBlQ29sb3I7XHJcbiAgICAgICAgdGhpcy5wYXJraW5nLm5hdGl2ZUVsZW1lbnQuYmFja2dyb3VuZENvbG9yID0gdGhpcy5kZWZhdWx0VHlwZUNvbG9yO1xyXG4gICAgICAgIHRoaXMub3RoZXIubmF0aXZlRWxlbWVudC5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLmRlZmF1bHRUeXBlQ29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgb25QYXJraW5nVGFwKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnJlc2V0QWxsKCk7XHJcbiAgICAgICAgdGhpcy5wYXJraW5nLm5hdGl2ZUVsZW1lbnQuYmFja2dyb3VuZENvbG9yID0gbmV3IGNvbG9yTW9kdWxlLkNvbG9yKCcjNjQ5NWVkJyk7XHJcbiAgICAgICAgdGhpcy5leHBUeXBlSW5kZXggPSBpbmRleDtcclxuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gJ1BhcmtpbmcnO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRm9vZFRhcChpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5yZXNldEFsbCgpO1xyXG4gICAgICAgIHRoaXMuZm9vZC5uYXRpdmVFbGVtZW50LmJhY2tncm91bmRDb2xvciA9IG5ldyBjb2xvck1vZHVsZS5Db2xvcignIzY0OTVlZCcpO1xyXG4gICAgICAgIHRoaXMuZXhwVHlwZUluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9ICdGb29kJztcclxuICAgIH1cclxuXHJcbiAgICBvbkRyaXZpbmdUYXAoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucmVzZXRBbGwoKTtcclxuICAgICAgICB0aGlzLmRyaXZpbmcubmF0aXZlRWxlbWVudC5iYWNrZ3JvdW5kQ29sb3IgPSBuZXcgY29sb3JNb2R1bGUuQ29sb3IoJyM2NDk1ZWQnKTtcclxuICAgICAgICB0aGlzLmV4cFR5cGVJbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSAnRHJpdmluZyc7XHJcbiAgICB9XHJcblxyXG4gICAgb25PdGhlclRhcChpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5yZXNldEFsbCgpO1xyXG4gICAgICAgIHRoaXMub3RoZXIubmF0aXZlRWxlbWVudC5iYWNrZ3JvdW5kQ29sb3IgPSBuZXcgY29sb3JNb2R1bGUuQ29sb3IoJyM2NDk1ZWQnKTtcclxuICAgICAgICB0aGlzLmV4cFR5cGVJbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSAnT3RoZXInO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVGFwQ2hlY2tCb3goaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIC8vIHRoaXMucmVjaXBlVHlwZXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAvLyAgICAgaWYgKGl0ZW0uaW5kZXggIT09IGluZGV4KSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnJlY2lwZVR5cGVzW2l0ZW0uaW5kZXhdLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnJlY2lwZVR5cGVzW2l0ZW0uaW5kZXhdLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIC8vIHRoaXMucmVjaXBlVHlwZXNbaW5kZXhdLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIC8vIHRoaXMucmVjaXBlVHlwZXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAvLyAgICAgaXRlbS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgLy8gICAgIGl0ZW0uZWxlbWVudC5uYXRpdmVFbGVtZW50LmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAvLyB9KVxyXG4gICAgfVxyXG5cclxuICAgIGFkZChhbW91bnQpIHtcclxuXHJcbiAgICAgICAgbGV0IGRhdGVQaWNrZXIgPSA8RGF0ZVBpY2tlcj50aGlzLmludm9pY2VEYXRlLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgbGV0IGludkRhdGUgPSBkYXRlUGlja2VyLmRhdGUgPyBkYXRlUGlja2VyLmRhdGUgOiB0aGlzLm1pbkRhdGU7XHJcblxyXG4gICAgICAgIGNhbWVyYU1vZHVsZS50YWtlUGljdHVyZSh7d2lkdGg6IDUwLCBoZWlnaHQ6IDUwLCBrZWVwQXNwZWN0UmF0aW86IHRydWV9KS50aGVuKGltYWdlU291cmNlID0+IHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VTcmMgPSBpbWFnZVNvdXJjZTtcclxuXHJcbiAgICAgICAgICAgIGxldCBiYXNlNjRpbWcgPSBpbWFnZVNvdXJjZS50b0Jhc2U2NFN0cmluZyhcImpwZ1wiKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaHR0cFNlcnZpY2UudXBsb2FkKHtcclxuICAgICAgICAgICAgICAgIHVzZXI6IHRoaXMudXNlck5hbWUsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogdGhpcy5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgIGFtb3VudDogYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgaW52b2ljZURhdGU6IGludkRhdGUudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIHBpY3R1cmU6IGJhc2U2NGltZ1xyXG4gICAgICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSByZXNwb25zZS5jb250ZW50LnRvSlNPTigpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgfSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIG9jY3VycmVkIFwiICsgZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nT3V0KCkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdlbXBsb3llZScpO1xyXG5cclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL3dlbGNvbWVcIl0sIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJmbGlwXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl19