"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var httpService_1 = require("../shared/services/httpService");
// Native Script core
var cameraModule = require("camera");
var nativescript_angular_1 = require("nativescript-angular");
var colorModule = require("color");
require("nativescript-localstorage");
var ExpensesComponent = (function () {
    function ExpensesComponent(page, httpService, routerExtensions) {
        this.page = page;
        this.httpService = httpService;
        this.routerExtensions = routerExtensions;
        this.minDate = new Date();
        this.defaultTypeColor = new colorModule.Color('white');
        this.cameraAvailable = cameraModule.isAvailable();
        page.actionBarHidden = true;
    }
    ExpensesComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('employee')) {
            this.employee = JSON.parse(localStorage.getItem('employee'));
        }
        console.log('camera available => ', cameraModule.isAvailable());
    };
    ExpensesComponent.prototype.getDate = function () {
        return new Date().toDateString();
    };
    ExpensesComponent.prototype.resetAll = function () {
        this.driving.nativeElement.backgroundColor = this.defaultTypeColor;
        this.food.nativeElement.backgroundColor = this.defaultTypeColor;
        this.parking.nativeElement.backgroundColor = this.defaultTypeColor;
        this.other.nativeElement.backgroundColor = this.defaultTypeColor;
    };
    ExpensesComponent.prototype.onParkingTap = function () {
        this.resetAll();
        this.parking.nativeElement.backgroundColor = new colorModule.Color('#6495ed');
        this.category = 'Parking';
    };
    ExpensesComponent.prototype.onFoodTap = function () {
        this.resetAll();
        this.food.nativeElement.backgroundColor = new colorModule.Color('#6495ed');
        this.category = 'Food';
    };
    ExpensesComponent.prototype.onDrivingTap = function () {
        this.resetAll();
        this.driving.nativeElement.backgroundColor = new colorModule.Color('#6495ed');
        this.category = 'Driving';
    };
    ExpensesComponent.prototype.onOtherTap = function () {
        this.resetAll();
        this.other.nativeElement.backgroundColor = new colorModule.Color('#6495ed');
        this.category = 'Other';
    };
    ExpensesComponent.prototype.clear = function () {
        this.resetAll();
        this.amount.nativeElement.text = '';
    };
    ExpensesComponent.prototype.add = function (amount) {
        var _this = this;
        if (this.cameraAvailable) {
            cameraModule.takePicture({ width: 50, height: 50, keepAspectRatio: true }).then(function (imageSource) {
                _this.imageSrc = imageSource;
                var base64img = imageSource.toBase64String("jpg");
                _this.uploadInvoice(amount, base64img);
            });
        }
        else {
            this.uploadInvoice(amount, '');
        }
    };
    ExpensesComponent.prototype.uploadInvoice = function (amount, img) {
        var datePicker = this.invoiceDate.nativeElement;
        var invDate = datePicker.date ? datePicker.date : this.minDate;
        var currentDate = new Date();
        this.httpService.upload({
            empName: this.employee.name,
            type: this.category,
            amount: amount,
            invoiceDate: invDate.getTime(),
            createDate: currentDate.getTime(),
            image: img
        }).subscribe(function (data) {
            console.log(data);
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
    ExpensesComponent.prototype.onTap = function () {
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
    __decorate([
        core_1.ViewChild("amount"), 
        __metadata('design:type', core_1.ElementRef)
    ], ExpensesComponent.prototype, "amount", void 0);
    ExpensesComponent = __decorate([
        core_1.Component({
            selector: 'app-expenses',
            templateUrl: "expenses/expenses.component.html",
            styleUrls: ['expenses/expenses.component.css'],
            providers: [httpService_1.HttpService]
        }), 
        __metadata('design:paramtypes', [page_1.Page, httpService_1.HttpService, nativescript_angular_1.RouterExtensions])
    ], ExpensesComponent);
    return ExpensesComponent;
}());
exports.ExpensesComponent = ExpensesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwZW5zZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXhwZW5zZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBdUQsZUFBZSxDQUFDLENBQUE7QUFDdkUscUJBQW1CLFNBQVMsQ0FBQyxDQUFBO0FBQzdCLDRCQUEwQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBRTNELHFCQUFxQjtBQUNyQixJQUFPLFlBQVksV0FBVyxRQUFRLENBQUMsQ0FBQztBQUN4QyxxQ0FBK0Isc0JBQXNCLENBQUMsQ0FBQTtBQUt0RCxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFbkMsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFRckM7SUFlSSwyQkFBb0IsSUFBVSxFQUFVLFdBQXdCLEVBQVUsZ0JBQWtDO1FBQXhGLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFYNUcsWUFBTyxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7UUFDM0IscUJBQWdCLEdBQVUsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pELG9CQUFlLEdBQVksWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBVWxELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0ksRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNqRSxDQUFDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxZQUFZLENBQUMs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QUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSxrQ0FBa0M7WUFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7WUFDOUMsU0FBUyxFQUFFLENBQUMseUJBQVcsQ0FBQztTQUMzQixDQUFDOzt5QkFBQTtJQTRHRix3QkFBQztBQUFELENBQUMsQUEzR0QsSUEyR0M7QUEzR1kseUJBQWlCLG9CQTJHN0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQge0h0dHBTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL3NlcnZpY2VzL2h0dHBTZXJ2aWNlXCI7XHJcblxyXG4vLyBOYXRpdmUgU2NyaXB0IGNvcmVcclxuaW1wb3J0IGNhbWVyYU1vZHVsZSA9IHJlcXVpcmUoXCJjYW1lcmFcIik7XHJcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XHJcbmltcG9ydCB7Q29sb3J9IGZyb20gXCJjb2xvclwiO1xyXG5pbXBvcnQge0RhdGVQaWNrZXJ9IGZyb20gXCJ1aS9kYXRlLXBpY2tlclwiO1xyXG5pbXBvcnQge0lFbXBsb3llZX0gZnJvbSBcIi4uL3NoYXJlZC9pbnRlcmZhY2VzL0lFbXBsb3llZVwiO1xyXG5cclxubGV0IGNvbG9yTW9kdWxlID0gcmVxdWlyZShcImNvbG9yXCIpO1xyXG5cclxucmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1sb2NhbHN0b3JhZ2VcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLWV4cGVuc2VzJyxcclxuICAgIHRlbXBsYXRlVXJsOiBcImV4cGVuc2VzL2V4cGVuc2VzLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFsnZXhwZW5zZXMvZXhwZW5zZXMuY29tcG9uZW50LmNzcyddLFxyXG4gICAgcHJvdmlkZXJzOiBbSHR0cFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFeHBlbnNlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBlbXBsb3llZTogSUVtcGxveWVlO1xyXG4gICAgaW1hZ2VTcmM6IGFueTtcclxuICAgIGNhdGVnb3J5OiBzdHJpbmc7XHJcbiAgICBtaW5EYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGRlZmF1bHRUeXBlQ29sb3I6IENvbG9yID0gbmV3IGNvbG9yTW9kdWxlLkNvbG9yKCd3aGl0ZScpO1xyXG4gICAgY2FtZXJhQXZhaWxhYmxlOiBCb29sZWFuID0gY2FtZXJhTW9kdWxlLmlzQXZhaWxhYmxlKCk7XHJcblxyXG4gICAgQFZpZXdDaGlsZChcImZvb2RcIikgZm9vZDogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoXCJwYXJraW5nXCIpIHBhcmtpbmc6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKFwiZHJpdmluZ1wiKSBkcml2aW5nOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZChcIm90aGVyXCIpIG90aGVyOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZChcImludm9pY2VEYXRlXCIpIGludm9pY2VEYXRlOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZChcImFtb3VudFwiKSBhbW91bnQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIGh0dHBTZXJ2aWNlOiBIdHRwU2VydmljZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XHJcbiAgICAgICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW1wbG95ZWUnKSkge1xyXG4gICAgICAgICAgICB0aGlzLmVtcGxveWVlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW1wbG95ZWUnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjYW1lcmEgYXZhaWxhYmxlID0+ICcsIGNhbWVyYU1vZHVsZS5pc0F2YWlsYWJsZSgpKVxyXG4gICAgfVxyXG5cclxuICAgIGdldERhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNldEFsbCgpIHtcclxuICAgICAgICB0aGlzLmRyaXZpbmcubmF0aXZlRWxlbWVudC5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLmRlZmF1bHRUeXBlQ29sb3I7XHJcbiAgICAgICAgdGhpcy5mb29kLm5hdGl2ZUVsZW1lbnQuYmFja2dyb3VuZENvbG9yID0gdGhpcy5kZWZhdWx0VHlwZUNvbG9yO1xyXG4gICAgICAgIHRoaXMucGFya2luZy5uYXRpdmVFbGVtZW50LmJhY2tncm91bmRDb2xvciA9IHRoaXMuZGVmYXVsdFR5cGVDb2xvcjtcclxuICAgICAgICB0aGlzLm90aGVyLm5hdGl2ZUVsZW1lbnQuYmFja2dyb3VuZENvbG9yID0gdGhpcy5kZWZhdWx0VHlwZUNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUGFya2luZ1RhcCgpIHtcclxuICAgICAgICB0aGlzLnJlc2V0QWxsKCk7XHJcbiAgICAgICAgdGhpcy5wYXJraW5nLm5hdGl2ZUVsZW1lbnQuYmFja2dyb3VuZENvbG9yID0gbmV3IGNvbG9yTW9kdWxlLkNvbG9yKCcjNjQ5NWVkJyk7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9ICdQYXJraW5nJztcclxuICAgIH1cclxuXHJcbiAgICBvbkZvb2RUYXAoKSB7XHJcbiAgICAgICAgdGhpcy5yZXNldEFsbCgpO1xyXG4gICAgICAgIHRoaXMuZm9vZC5uYXRpdmVFbGVtZW50LmJhY2tncm91bmRDb2xvciA9IG5ldyBjb2xvck1vZHVsZS5Db2xvcignIzY0OTVlZCcpO1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSAnRm9vZCc7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ecml2aW5nVGFwKCkge1xyXG4gICAgICAgIHRoaXMucmVzZXRBbGwoKTtcclxuICAgICAgICB0aGlzLmRyaXZpbmcubmF0aXZlRWxlbWVudC5iYWNrZ3JvdW5kQ29sb3IgPSBuZXcgY29sb3JNb2R1bGUuQ29sb3IoJyM2NDk1ZWQnKTtcclxuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gJ0RyaXZpbmcnO1xyXG4gICAgfVxyXG5cclxuICAgIG9uT3RoZXJUYXAoKSB7XHJcbiAgICAgICAgdGhpcy5yZXNldEFsbCgpO1xyXG4gICAgICAgIHRoaXMub3RoZXIubmF0aXZlRWxlbWVudC5iYWNrZ3JvdW5kQ29sb3IgPSBuZXcgY29sb3JNb2R1bGUuQ29sb3IoJyM2NDk1ZWQnKTtcclxuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gJ090aGVyJztcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLnJlc2V0QWxsKCk7XHJcbiAgICAgICAgdGhpcy5hbW91bnQubmF0aXZlRWxlbWVudC50ZXh0ID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKGFtb3VudCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNhbWVyYUF2YWlsYWJsZSl7XHJcbiAgICAgICAgICAgIGNhbWVyYU1vZHVsZS50YWtlUGljdHVyZSh7d2lkdGg6IDUwLCBoZWlnaHQ6IDUwLCBrZWVwQXNwZWN0UmF0aW86IHRydWV9KS50aGVuKGltYWdlU291cmNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VTcmMgPSBpbWFnZVNvdXJjZTtcclxuICAgICAgICAgICAgICAgIGxldCBiYXNlNjRpbWcgPSBpbWFnZVNvdXJjZS50b0Jhc2U2NFN0cmluZyhcImpwZ1wiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkSW52b2ljZShhbW91bnQsIGJhc2U2NGltZyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBsb2FkSW52b2ljZShhbW91bnQsICcnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGxvYWRJbnZvaWNlKGFtb3VudCwgaW1nKXtcclxuICAgICAgICBsZXQgZGF0ZVBpY2tlciA9IDxEYXRlUGlja2VyPnRoaXMuaW52b2ljZURhdGUubmF0aXZlRWxlbWVudDtcclxuICAgICAgICBsZXQgaW52RGF0ZSA9IGRhdGVQaWNrZXIuZGF0ZSA/IGRhdGVQaWNrZXIuZGF0ZSA6IHRoaXMubWluRGF0ZTtcclxuICAgICAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmh0dHBTZXJ2aWNlLnVwbG9hZCh7XHJcbiAgICAgICAgICAgIGVtcE5hbWU6IHRoaXMuZW1wbG95ZWUubmFtZSxcclxuICAgICAgICAgICAgdHlwZTogdGhpcy5jYXRlZ29yeSxcclxuICAgICAgICAgICAgYW1vdW50OiBhbW91bnQsXHJcbiAgICAgICAgICAgIGludm9pY2VEYXRlOiBpbnZEYXRlLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgY3JlYXRlRGF0ZTogY3VycmVudERhdGUuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBpbWFnZTogaW1nXHJcbiAgICAgICAgfSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dPdXQoKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2VtcGxveWVlJyk7XHJcblxyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvd2VsY29tZVwiXSwge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImZsaXBcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25UYXAoKSB7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iXX0=