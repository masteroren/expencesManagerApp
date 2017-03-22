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
            providers: [httpService_1.HttpService]
        }), 
        __metadata('design:paramtypes', [page_1.Page, httpService_1.HttpService, nativescript_angular_1.RouterExtensions])
    ], ExpensesComponent);
    return ExpensesComponent;
}());
exports.ExpensesComponent = ExpensesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwZW5zZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXhwZW5zZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBdUQsZUFBZSxDQUFDLENBQUE7QUFDdkUscUJBQW1CLFNBQVMsQ0FBQyxDQUFBO0FBQzdCLDRCQUEwQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBRTNELHFCQUFxQjtBQUNyQixJQUFPLFlBQVksV0FBVyxRQUFRLENBQUMsQ0FBQztBQUN4QyxxQ0FBK0Isc0JBQXNCLENBQUMsQ0FBQTtBQUt0RCxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFbkMsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFPckM7SUFlSSwyQkFBb0IsSUFBVSxFQUFVLFdBQXdCLEVBQVUsZ0JBQWtDO1FBQXhGLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFYNUcsWUFBTyxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7UUFDM0IscUJBQWdCLEdBQVUsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pELG9CQUFlLEdBQVksWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBVWxELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0ksRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNqRSxDQUFDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxZQUFZLENBQUMs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QUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSxrQ0FBa0M7WUFDL0MsU0FBUyxFQUFFLENBQUMseUJBQVcsQ0FBQztTQUMzQixDQUFDOzt5QkFBQTtJQTRHRix3QkFBQztBQUFELENBQUMsQUEzR0QsSUEyR0M7QUEzR1kseUJBQWlCLG9CQTJHN0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQge0h0dHBTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL3NlcnZpY2VzL2h0dHBTZXJ2aWNlXCI7XHJcblxyXG4vLyBOYXRpdmUgU2NyaXB0IGNvcmVcclxuaW1wb3J0IGNhbWVyYU1vZHVsZSA9IHJlcXVpcmUoXCJjYW1lcmFcIik7XHJcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XHJcbmltcG9ydCB7Q29sb3J9IGZyb20gXCJjb2xvclwiO1xyXG5pbXBvcnQge0RhdGVQaWNrZXJ9IGZyb20gXCJ1aS9kYXRlLXBpY2tlclwiO1xyXG5pbXBvcnQge0lFbXBsb3llZX0gZnJvbSBcIi4uL3NoYXJlZC9pbnRlcmZhY2VzL0lFbXBsb3llZVwiO1xyXG5cclxubGV0IGNvbG9yTW9kdWxlID0gcmVxdWlyZShcImNvbG9yXCIpO1xyXG5cclxucmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1sb2NhbHN0b3JhZ2VcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLWV4cGVuc2VzJyxcclxuICAgIHRlbXBsYXRlVXJsOiBcImV4cGVuc2VzL2V4cGVuc2VzLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBwcm92aWRlcnM6IFtIdHRwU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEV4cGVuc2VzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGVtcGxveWVlOiBJRW1wbG95ZWU7XHJcbiAgICBpbWFnZVNyYzogYW55O1xyXG4gICAgY2F0ZWdvcnk6IHN0cmluZztcclxuICAgIG1pbkRhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgZGVmYXVsdFR5cGVDb2xvcjogQ29sb3IgPSBuZXcgY29sb3JNb2R1bGUuQ29sb3IoJ3doaXRlJyk7XHJcbiAgICBjYW1lcmFBdmFpbGFibGU6IEJvb2xlYW4gPSBjYW1lcmFNb2R1bGUuaXNBdmFpbGFibGUoKTtcclxuXHJcbiAgICBAVmlld0NoaWxkKFwiZm9vZFwiKSBmb29kOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZChcInBhcmtpbmdcIikgcGFya2luZzogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoXCJkcml2aW5nXCIpIGRyaXZpbmc6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKFwib3RoZXJcIikgb3RoZXI6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKFwiaW52b2ljZURhdGVcIikgaW52b2ljZURhdGU6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKFwiYW1vdW50XCIpIGFtb3VudDogRWxlbWVudFJlZjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgaHR0cFNlcnZpY2U6IEh0dHBTZXJ2aWNlLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcclxuICAgICAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbXBsb3llZScpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1wbG95ZWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbXBsb3llZScpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NhbWVyYSBhdmFpbGFibGUgPT4gJywgY2FtZXJhTW9kdWxlLmlzQXZhaWxhYmxlKCkpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUoKS50b0RhdGVTdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc2V0QWxsKCkge1xyXG4gICAgICAgIHRoaXMuZHJpdmluZy5uYXRpdmVFbGVtZW50LmJhY2tncm91bmRDb2xvciA9IHRoaXMuZGVmYXVsdFR5cGVDb2xvcjtcclxuICAgICAgICB0aGlzLmZvb2QubmF0aXZlRWxlbWVudC5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLmRlZmF1bHRUeXBlQ29sb3I7XHJcbiAgICAgICAgdGhpcy5wYXJraW5nLm5hdGl2ZUVsZW1lbnQuYmFja2dyb3VuZENvbG9yID0gdGhpcy5kZWZhdWx0VHlwZUNvbG9yO1xyXG4gICAgICAgIHRoaXMub3RoZXIubmF0aXZlRWxlbWVudC5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLmRlZmF1bHRUeXBlQ29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgb25QYXJraW5nVGFwKCkge1xyXG4gICAgICAgIHRoaXMucmVzZXRBbGwoKTtcclxuICAgICAgICB0aGlzLnBhcmtpbmcubmF0aXZlRWxlbWVudC5iYWNrZ3JvdW5kQ29sb3IgPSBuZXcgY29sb3JNb2R1bGUuQ29sb3IoJyM2NDk1ZWQnKTtcclxuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gJ1BhcmtpbmcnO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRm9vZFRhcCgpIHtcclxuICAgICAgICB0aGlzLnJlc2V0QWxsKCk7XHJcbiAgICAgICAgdGhpcy5mb29kLm5hdGl2ZUVsZW1lbnQuYmFja2dyb3VuZENvbG9yID0gbmV3IGNvbG9yTW9kdWxlLkNvbG9yKCcjNjQ5NWVkJyk7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9ICdGb29kJztcclxuICAgIH1cclxuXHJcbiAgICBvbkRyaXZpbmdUYXAoKSB7XHJcbiAgICAgICAgdGhpcy5yZXNldEFsbCgpO1xyXG4gICAgICAgIHRoaXMuZHJpdmluZy5uYXRpdmVFbGVtZW50LmJhY2tncm91bmRDb2xvciA9IG5ldyBjb2xvck1vZHVsZS5Db2xvcignIzY0OTVlZCcpO1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSAnRHJpdmluZyc7XHJcbiAgICB9XHJcblxyXG4gICAgb25PdGhlclRhcCgpIHtcclxuICAgICAgICB0aGlzLnJlc2V0QWxsKCk7XHJcbiAgICAgICAgdGhpcy5vdGhlci5uYXRpdmVFbGVtZW50LmJhY2tncm91bmRDb2xvciA9IG5ldyBjb2xvck1vZHVsZS5Db2xvcignIzY0OTVlZCcpO1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSAnT3RoZXInO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMucmVzZXRBbGwoKTtcclxuICAgICAgICB0aGlzLmFtb3VudC5uYXRpdmVFbGVtZW50LnRleHQgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBhZGQoYW1vdW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FtZXJhQXZhaWxhYmxlKXtcclxuICAgICAgICAgICAgY2FtZXJhTW9kdWxlLnRha2VQaWN0dXJlKHt3aWR0aDogNTAsIGhlaWdodDogNTAsIGtlZXBBc3BlY3RSYXRpbzogdHJ1ZX0pLnRoZW4oaW1hZ2VTb3VyY2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZVNyYyA9IGltYWdlU291cmNlO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJhc2U2NGltZyA9IGltYWdlU291cmNlLnRvQmFzZTY0U3RyaW5nKFwianBnXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGxvYWRJbnZvaWNlKGFtb3VudCwgYmFzZTY0aW1nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51cGxvYWRJbnZvaWNlKGFtb3VudCwgJycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwbG9hZEludm9pY2UoYW1vdW50LCBpbWcpe1xyXG4gICAgICAgIGxldCBkYXRlUGlja2VyID0gPERhdGVQaWNrZXI+dGhpcy5pbnZvaWNlRGF0ZS5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIGxldCBpbnZEYXRlID0gZGF0ZVBpY2tlci5kYXRlID8gZGF0ZVBpY2tlci5kYXRlIDogdGhpcy5taW5EYXRlO1xyXG4gICAgICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuaHR0cFNlcnZpY2UudXBsb2FkKHtcclxuICAgICAgICAgICAgZW1wTmFtZTogdGhpcy5lbXBsb3llZS5uYW1lLFxyXG4gICAgICAgICAgICB0eXBlOiB0aGlzLmNhdGVnb3J5LFxyXG4gICAgICAgICAgICBhbW91bnQ6IGFtb3VudCxcclxuICAgICAgICAgICAgaW52b2ljZURhdGU6IGludkRhdGUuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBjcmVhdGVEYXRlOiBjdXJyZW50RGF0ZS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGltYWdlOiBpbWdcclxuICAgICAgICB9KS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ091dCgpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZW1wbG95ZWUnKTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi93ZWxjb21lXCJdLCB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiZmxpcFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblRhcCgpIHtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdfQ==