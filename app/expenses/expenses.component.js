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
        var datePicker = this.invoiceDate.nativeElement;
        var invDate = datePicker.date ? datePicker.date : this.minDate;
        cameraModule.takePicture({ width: 50, height: 50, keepAspectRatio: true }).then(function (imageSource) {
            _this.imageSrc = imageSource;
            var base64img = imageSource.toBase64String("jpg");
            var currentDate = new Date();
            _this.httpService.upload({
                empName: _this.employee.name,
                type: _this.category,
                amount: amount,
                invoiceDate: invDate.getTime(),
                createDate: currentDate.getTime(),
                image: base64img
            }).subscribe(function (data) {
                console.log(data);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwZW5zZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXhwZW5zZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBdUQsZUFBZSxDQUFDLENBQUE7QUFDdkUscUJBQW1CLFNBQVMsQ0FBQyxDQUFBO0FBQzdCLDRCQUEwQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBRTNELHFCQUFxQjtBQUNyQixJQUFPLFlBQVksV0FBVyxRQUFRLENBQUMsQ0FBQztBQUN4QyxxQ0FBK0Isc0JBQXNCLENBQUMsQ0FBQTtBQVF0RCxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFbkMsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFPckM7SUFlSSwyQkFBb0IsSUFBVSxFQUFVLFdBQXdCLEVBQVUsZ0JBQWtDO1FBQXhGLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFYNUcsWUFBTyxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7UUFDM0IscUJBQWdCLEdBQVUsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pELG9CQUFlLEdBQVksWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBVWxELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0ksRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNqRSxDQUFDO1FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxZQUFZLENBQUMs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fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7SHR0cFNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvc2VydmljZXMvaHR0cFNlcnZpY2VcIjtcclxuXHJcbi8vIE5hdGl2ZSBTY3JpcHQgY29yZVxyXG5pbXBvcnQgY2FtZXJhTW9kdWxlID0gcmVxdWlyZShcImNhbWVyYVwiKTtcclxuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcclxuaW1wb3J0IHtDb2xvcn0gZnJvbSBcImNvbG9yXCI7XHJcbmltcG9ydCB7RGF0ZVBpY2tlcn0gZnJvbSBcInVpL2RhdGUtcGlja2VyXCI7XHJcbmltcG9ydCB7SUVtcGxveWVlfSBmcm9tIFwiLi4vc2hhcmVkL2ludGVyZmFjZXMvSUVtcGxveWVlXCI7XHJcbmltcG9ydCB7SVJlY2lwZVR5cGV9IGZyb20gXCIuLi9zaGFyZWQvaW50ZXJmYWNlcy9JUmVjaXBlVHlwZVwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZUFycmF5fSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XHJcblxyXG5sZXQgY29sb3JNb2R1bGUgPSByZXF1aXJlKFwiY29sb3JcIik7XHJcblxyXG5yZXF1aXJlKFwibmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZVwiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtZXhwZW5zZXMnLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiZXhwZW5zZXMvZXhwZW5zZXMuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHByb3ZpZGVyczogW0h0dHBTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXhwZW5zZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgZW1wbG95ZWU6IElFbXBsb3llZTtcclxuICAgIGltYWdlU3JjOiBhbnk7XHJcbiAgICBjYXRlZ29yeTogc3RyaW5nO1xyXG4gICAgbWluRGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBkZWZhdWx0VHlwZUNvbG9yOiBDb2xvciA9IG5ldyBjb2xvck1vZHVsZS5Db2xvcignd2hpdGUnKTtcclxuICAgIGNhbWVyYUF2YWlsYWJsZTogQm9vbGVhbiA9IGNhbWVyYU1vZHVsZS5pc0F2YWlsYWJsZSgpO1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoXCJmb29kXCIpIGZvb2Q6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKFwicGFya2luZ1wiKSBwYXJraW5nOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZChcImRyaXZpbmdcIikgZHJpdmluZzogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoXCJvdGhlclwiKSBvdGhlcjogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoXCJpbnZvaWNlRGF0ZVwiKSBpbnZvaWNlRGF0ZTogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoXCJhbW91bnRcIikgYW1vdW50OiBFbGVtZW50UmVmO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSBodHRwU2VydmljZTogSHR0cFNlcnZpY2UsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xyXG4gICAgICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VtcGxveWVlJykpIHtcclxuICAgICAgICAgICAgdGhpcy5lbXBsb3llZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VtcGxveWVlJykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NhbWVyYSBhdmFpbGFibGUgPT4gJywgY2FtZXJhTW9kdWxlLmlzQXZhaWxhYmxlKCkpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUoKS50b0RhdGVTdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc2V0QWxsKCkge1xyXG4gICAgICAgIHRoaXMuZHJpdmluZy5uYXRpdmVFbGVtZW50LmJhY2tncm91bmRDb2xvciA9IHRoaXMuZGVmYXVsdFR5cGVDb2xvcjtcclxuICAgICAgICB0aGlzLmZvb2QubmF0aXZlRWxlbWVudC5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLmRlZmF1bHRUeXBlQ29sb3I7XHJcbiAgICAgICAgdGhpcy5wYXJraW5nLm5hdGl2ZUVsZW1lbnQuYmFja2dyb3VuZENvbG9yID0gdGhpcy5kZWZhdWx0VHlwZUNvbG9yO1xyXG4gICAgICAgIHRoaXMub3RoZXIubmF0aXZlRWxlbWVudC5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLmRlZmF1bHRUeXBlQ29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgb25QYXJraW5nVGFwKCkge1xyXG4gICAgICAgIHRoaXMucmVzZXRBbGwoKTtcclxuICAgICAgICB0aGlzLnBhcmtpbmcubmF0aXZlRWxlbWVudC5iYWNrZ3JvdW5kQ29sb3IgPSBuZXcgY29sb3JNb2R1bGUuQ29sb3IoJyM2NDk1ZWQnKTtcclxuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gJ1BhcmtpbmcnO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRm9vZFRhcCgpIHtcclxuICAgICAgICB0aGlzLnJlc2V0QWxsKCk7XHJcbiAgICAgICAgdGhpcy5mb29kLm5hdGl2ZUVsZW1lbnQuYmFja2dyb3VuZENvbG9yID0gbmV3IGNvbG9yTW9kdWxlLkNvbG9yKCcjNjQ5NWVkJyk7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9ICdGb29kJztcclxuICAgIH1cclxuXHJcbiAgICBvbkRyaXZpbmdUYXAoKSB7XHJcbiAgICAgICAgdGhpcy5yZXNldEFsbCgpO1xyXG4gICAgICAgIHRoaXMuZHJpdmluZy5uYXRpdmVFbGVtZW50LmJhY2tncm91bmRDb2xvciA9IG5ldyBjb2xvck1vZHVsZS5Db2xvcignIzY0OTVlZCcpO1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSAnRHJpdmluZyc7XHJcbiAgICB9XHJcblxyXG4gICAgb25PdGhlclRhcCgpIHtcclxuICAgICAgICB0aGlzLnJlc2V0QWxsKCk7XHJcbiAgICAgICAgdGhpcy5vdGhlci5uYXRpdmVFbGVtZW50LmJhY2tncm91bmRDb2xvciA9IG5ldyBjb2xvck1vZHVsZS5Db2xvcignIzY0OTVlZCcpO1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSAnT3RoZXInO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMucmVzZXRBbGwoKTtcclxuICAgICAgICB0aGlzLmFtb3VudC5uYXRpdmVFbGVtZW50LnRleHQgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBhZGQoYW1vdW50KSB7XHJcblxyXG4gICAgICAgIGxldCBkYXRlUGlja2VyID0gPERhdGVQaWNrZXI+dGhpcy5pbnZvaWNlRGF0ZS5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIGxldCBpbnZEYXRlID0gZGF0ZVBpY2tlci5kYXRlID8gZGF0ZVBpY2tlci5kYXRlIDogdGhpcy5taW5EYXRlO1xyXG5cclxuICAgICAgICBjYW1lcmFNb2R1bGUudGFrZVBpY3R1cmUoe3dpZHRoOiA1MCwgaGVpZ2h0OiA1MCwga2VlcEFzcGVjdFJhdGlvOiB0cnVlfSkudGhlbihpbWFnZVNvdXJjZSA9PiB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmltYWdlU3JjID0gaW1hZ2VTb3VyY2U7XHJcblxyXG4gICAgICAgICAgICBsZXQgYmFzZTY0aW1nID0gaW1hZ2VTb3VyY2UudG9CYXNlNjRTdHJpbmcoXCJqcGdcIik7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmh0dHBTZXJ2aWNlLnVwbG9hZCh7XHJcbiAgICAgICAgICAgICAgICBlbXBOYW1lOiB0aGlzLmVtcGxveWVlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiB0aGlzLmNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiBhbW91bnQsXHJcbiAgICAgICAgICAgICAgICBpbnZvaWNlRGF0ZTogaW52RGF0ZS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVEYXRlOiBjdXJyZW50RGF0ZS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogYmFzZTY0aW1nXHJcbiAgICAgICAgICAgIH0pLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nT3V0KCkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdlbXBsb3llZScpO1xyXG5cclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL3dlbGNvbWVcIl0sIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJmbGlwXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVGFwKCkge1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl19