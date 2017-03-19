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
    }
    ExpensesComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('employee')) {
            this.employee = JSON.parse(localStorage.getItem('employee'));
            console.log('employee => ', this.employee.name);
        }
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
            console.log('employee name => ', _this.employee.name);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwZW5zZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXhwZW5zZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBdUQsZUFBZSxDQUFDLENBQUE7QUFDdkUscUJBQW1CLFNBQVMsQ0FBQyxDQUFBO0FBRTdCLGlDQUE4Qix1Q0FBdUMsQ0FBQyxDQUFBO0FBQ3RFLGtDQUFlLENBQUMsVUFBVSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxRQUFRLEVBQXpDLENBQXlDLENBQUMsQ0FBQztBQUM3RSw0QkFBMEIsZ0NBQWdDLENBQUMsQ0FBQTtBQUkzRCxJQUFPLFlBQVksV0FBVyxRQUFRLENBQUMsQ0FBQztBQUd4QyxxQ0FBK0Isc0JBQXNCLENBQUMsQ0FBQTtBQUt0RCxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFbkMsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFPckM7SUFrQkksMkJBQW9CLElBQVUsRUFBVSxXQUF3QixFQUFVLGdCQUFrQztRQUF4RixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBWDVHLFlBQU8sR0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXJDLHFCQUFnQixHQUFVLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQVVyRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNJLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZ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LENBQUM7O29EQUFBO0lBQ25CO1FBQUMsZ0JBQVMsQ0FBQyxhQUFhLENBQUM7OzBEQUFBO0lBQ3pCO1FBQUMsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7O3FEQUFBO0lBckJ4QjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsa0NBQWtDO1lBQy9DLFNBQVMsRUFBRSxDQUFDLHlCQUFXLENBQUM7U0FDM0IsQ0FBQzs7eUJBQUE7SUErR0Ysd0JBQUM7QUFBRCxDQUFDLEFBOUdELElBOEdDO0FBOUdZLHlCQUFpQixvQkE4RzdCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHtDaGVja0JveH0gZnJvbSAnbmF0aXZlc2NyaXB0LWNoZWNrYm94JztcclxuaW1wb3J0IHtyZWdpc3RlckVsZW1lbnR9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XHJcbnJlZ2lzdGVyRWxlbWVudChcIkNoZWNrQm94XCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY2hlY2tib3hcIikuQ2hlY2tCb3gpO1xyXG5pbXBvcnQge0h0dHBTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL3NlcnZpY2VzL2h0dHBTZXJ2aWNlXCI7XHJcblxyXG4vLyBOYXRpdmUgU2NyaXB0IGNvcmVcclxuaW1wb3J0IGltYWdlTW9kdWxlID0gcmVxdWlyZShcInVpL2ltYWdlXCIpO1xyXG5pbXBvcnQgY2FtZXJhTW9kdWxlID0gcmVxdWlyZShcImNhbWVyYVwiKTtcclxuaW1wb3J0IGVudW1zTW9kdWxlICA9IHJlcXVpcmUoJ3VpL2VudW1zJylcclxuaW1wb3J0IGZzTW9kdWxlID0gcmVxdWlyZShcImZpbGUtc3lzdGVtXCIpO1xyXG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xyXG5pbXBvcnQge0NvbG9yfSBmcm9tIFwiY29sb3JcIjtcclxuaW1wb3J0IHtEYXRlUGlja2VyfSBmcm9tIFwidWkvZGF0ZS1waWNrZXJcIjtcclxuaW1wb3J0IHtJRW1wbG95ZWV9IGZyb20gXCIuLi9zaGFyZWQvaW50ZXJmYWNlcy9JRW1wbG95ZWVcIjtcclxuXHJcbmxldCBjb2xvck1vZHVsZSA9IHJlcXVpcmUoXCJjb2xvclwiKTtcclxuXHJcbnJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtbG9jYWxzdG9yYWdlXCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1leHBlbnNlcycsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJleHBlbnNlcy9leHBlbnNlcy5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgcHJvdmlkZXJzOiBbSHR0cFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFeHBlbnNlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBlbXBsb3llZTogSUVtcGxveWVlO1xyXG4gICAgaW1hZ2VTcmM6IGFueTtcclxuXHJcbiAgICBleHBUeXBlSW5kZXg6IG51bWJlcjtcclxuICAgIGNhdGVnb3J5OiBzdHJpbmc7XHJcblxyXG4gICAgbWluRGF0ZTogRGF0ZSA9IG5ldyBEYXRlKDIwMDAsIDAsIDEpO1xyXG5cclxuICAgIGRlZmF1bHRUeXBlQ29sb3I6IENvbG9yID0gbmV3IGNvbG9yTW9kdWxlLkNvbG9yKCd3aGl0ZScpO1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoXCJmb29kXCIpIGZvb2Q6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKFwicGFya2luZ1wiKSBwYXJraW5nOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZChcImRyaXZpbmdcIikgZHJpdmluZzogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoXCJvdGhlclwiKSBvdGhlcjogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoXCJpbnZvaWNlRGF0ZVwiKSBpbnZvaWNlRGF0ZTogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoXCJhbW91bnRcIikgYW1vdW50OiBFbGVtZW50UmVmO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSBodHRwU2VydmljZTogSHR0cFNlcnZpY2UsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xyXG4gICAgICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VtcGxveWVlJykpIHtcclxuICAgICAgICAgICAgdGhpcy5lbXBsb3llZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VtcGxveWVlJykpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZW1wbG95ZWUgPT4gJywgdGhpcy5lbXBsb3llZS5uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUoKS50b0RhdGVTdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc2V0QWxsKCkge1xyXG4gICAgICAgIHRoaXMuZHJpdmluZy5uYXRpdmVFbGVtZW50LmJhY2tncm91bmRDb2xvciA9IHRoaXMuZGVmYXVsdFR5cGVDb2xvcjtcclxuICAgICAgICB0aGlzLmZvb2QubmF0aXZlRWxlbWVudC5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLmRlZmF1bHRUeXBlQ29sb3I7XHJcbiAgICAgICAgdGhpcy5wYXJraW5nLm5hdGl2ZUVsZW1lbnQuYmFja2dyb3VuZENvbG9yID0gdGhpcy5kZWZhdWx0VHlwZUNvbG9yO1xyXG4gICAgICAgIHRoaXMub3RoZXIubmF0aXZlRWxlbWVudC5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLmRlZmF1bHRUeXBlQ29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgb25QYXJraW5nVGFwKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnJlc2V0QWxsKCk7XHJcbiAgICAgICAgdGhpcy5wYXJraW5nLm5hdGl2ZUVsZW1lbnQuYmFja2dyb3VuZENvbG9yID0gbmV3IGNvbG9yTW9kdWxlLkNvbG9yKCcjNjQ5NWVkJyk7XHJcbiAgICAgICAgdGhpcy5leHBUeXBlSW5kZXggPSBpbmRleDtcclxuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gJ1BhcmtpbmcnO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRm9vZFRhcChpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5yZXNldEFsbCgpO1xyXG4gICAgICAgIHRoaXMuZm9vZC5uYXRpdmVFbGVtZW50LmJhY2tncm91bmRDb2xvciA9IG5ldyBjb2xvck1vZHVsZS5Db2xvcignIzY0OTVlZCcpO1xyXG4gICAgICAgIHRoaXMuZXhwVHlwZUluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9ICdGb29kJztcclxuICAgIH1cclxuXHJcbiAgICBvbkRyaXZpbmdUYXAoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucmVzZXRBbGwoKTtcclxuICAgICAgICB0aGlzLmRyaXZpbmcubmF0aXZlRWxlbWVudC5iYWNrZ3JvdW5kQ29sb3IgPSBuZXcgY29sb3JNb2R1bGUuQ29sb3IoJyM2NDk1ZWQnKTtcclxuICAgICAgICB0aGlzLmV4cFR5cGVJbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSAnRHJpdmluZyc7XHJcbiAgICB9XHJcblxyXG4gICAgb25PdGhlclRhcChpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5yZXNldEFsbCgpO1xyXG4gICAgICAgIHRoaXMub3RoZXIubmF0aXZlRWxlbWVudC5iYWNrZ3JvdW5kQ29sb3IgPSBuZXcgY29sb3JNb2R1bGUuQ29sb3IoJyM2NDk1ZWQnKTtcclxuICAgICAgICB0aGlzLmV4cFR5cGVJbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSAnT3RoZXInO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMucmVzZXRBbGwoKTtcclxuICAgICAgICB0aGlzLmFtb3VudC5uYXRpdmVFbGVtZW50LnRleHQgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBhZGQoYW1vdW50KSB7XHJcblxyXG4gICAgICAgIGxldCBkYXRlUGlja2VyID0gPERhdGVQaWNrZXI+dGhpcy5pbnZvaWNlRGF0ZS5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIGxldCBpbnZEYXRlID0gZGF0ZVBpY2tlci5kYXRlID8gZGF0ZVBpY2tlci5kYXRlIDogdGhpcy5taW5EYXRlO1xyXG5cclxuICAgICAgICBjYW1lcmFNb2R1bGUudGFrZVBpY3R1cmUoe3dpZHRoOiA1MCwgaGVpZ2h0OiA1MCwga2VlcEFzcGVjdFJhdGlvOiB0cnVlfSkudGhlbihpbWFnZVNvdXJjZSA9PiB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmltYWdlU3JjID0gaW1hZ2VTb3VyY2U7XHJcblxyXG4gICAgICAgICAgICBsZXQgYmFzZTY0aW1nID0gaW1hZ2VTb3VyY2UudG9CYXNlNjRTdHJpbmcoXCJqcGdcIik7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZW1wbG95ZWUgbmFtZSA9PiAnLCB0aGlzLmVtcGxveWVlLm5hbWUpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5odHRwU2VydmljZS51cGxvYWQoe1xyXG4gICAgICAgICAgICAgICAgZW1wTmFtZTogdGhpcy5lbXBsb3llZS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogdGhpcy5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgIGFtb3VudDogYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgaW52b2ljZURhdGU6IGludkRhdGUuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlRGF0ZTogY3VycmVudERhdGUuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IGJhc2U2NGltZ1xyXG4gICAgICAgICAgICB9KS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ091dCgpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZW1wbG95ZWUnKTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi93ZWxjb21lXCJdLCB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiZmxpcFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdfQ==