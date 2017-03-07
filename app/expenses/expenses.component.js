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
    ExpensesComponent.prototype.ngOnInit = function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwZW5zZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXhwZW5zZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBdUQsZUFBZSxDQUFDLENBQUE7QUFDdkUscUJBQW1CLFNBQVMsQ0FBQyxDQUFBO0FBRTdCLGlDQUE4Qix1Q0FBdUMsQ0FBQyxDQUFBO0FBQ3RFLGtDQUFlLENBQUMsVUFBVSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxRQUFRLEVBQXpDLENBQXlDLENBQUMsQ0FBQztBQUM3RSw0QkFBMEIsZ0NBQWdDLENBQUMsQ0FBQTtBQUkzRCxJQUFPLFlBQVksV0FBVyxRQUFRLENBQUMsQ0FBQztBQUd4QyxxQ0FBK0Isc0JBQXNCLENBQUMsQ0FBQTtBQUl0RCxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFbkMsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFPckM7SUFrQkksMkJBQW9CLElBQVUsRUFBVSxXQUF3QixFQUFVLGdCQUFrQztRQUF4RixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBWDVHLFlBQU8sR0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBRW5DLHFCQUFnQixHQUFVLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQVVyRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLFFBQVEsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hELEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDWCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzlDLENBQUM7SUFDTCxDQUFDO0lBRUQsb0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxtQ0FBTyxHQUFQO1FBQ0ksTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVPLG9DQUFRLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUNuRSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2hFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDbkUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUNyRSxDQUFDO0lBRUQsd0NBQVksR0FBWixVQUFhLEtBQWE7UUFDdEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGVBQWUsR0FBRyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUUsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7SUFDOUIsQ0FBQztJQUVELHFDQUFTLEdBQVQsVUFBVSxLQUFhO1FBQ25CLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEdBQUcsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO0lBQzNCLENBQUM7SUFFRCx3Q0FBWSxHQUFaLFVBQWEsS0FBYTtRQUN0QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsZUFBZSxHQUFHLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztJQUM5QixDQUFDO0lBRUQsc0NBQVUsR0FBVixVQUFXLEtBQWE7UUFDcEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLGVBQWUsR0FBRyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7SUFDNUIsQ0FBQztJQUVELGlDQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQsK0JBQUcsR0FBSCxVQUFJLE1BQU07UUFBVixpQkF3QkM7UUF0QkcsSUFBSSxVQUFVLEdBQWUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7UUFDNUQsSUFBSSxPQUFPLEdBQUcsVUFBVSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFL0QsWUFBWSxDQUFDLFdBQVcsQ0FBQyxFQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxXQUFXO1lBRXJGLEtBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO1lBRTVCLElBQUksU0FBUyxHQUFHLFdBQVcsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFbEQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7Z0JBQ3BCLElBQUksRUFBRSxLQUFJLENBQUMsUUFBUTtnQkFDbkIsUUFBUSxFQUFFLEtBQUksQ0FBQyxRQUFRO2dCQUN2QixNQUFNLEVBQUUsTUFBTTtnQkFDZCxXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVcsRUFBRTtnQkFDbEMsT0FBTyxFQUFFLFNBQVM7YUFDckIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVE7Z0JBQ1osSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4QixDQUFDLEVBQUUsVUFBQSxDQUFDO2dCQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDdkMsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxrQ0FBTSxHQUFOO1FBQ0ksWUFBWSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVwQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDekMsVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxNQUFNO2FBQ2Y7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBaEdEO1FBQUMsZ0JBQVMsQ0FBQyxNQUFNLENBQUM7O21EQUFBO0lBQ2xCO1FBQUMsZ0JBQVMsQ0FBQyxTQUFTLENBQUM7O3NEQUFBO0lBQ3JCO1FBQUMsZ0JBQVMsQ0FBQyxTQUFTLENBQUM7O3NEQUFBO0lBQ3JCO1FBQUMsZ0JBQVMsQ0FBQyxPQUFPLENBQUM7O29EQUFBO0lBQ25CO1FBQUMsZ0JBQVMsQ0FBQyxhQUFhLENBQUM7OzBEQUFBO0lBQ3pCO1FBQUMsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7O3FEQUFBO0lBckJ4QjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsa0NBQWtDO1lBQy9DLFNBQVMsRUFBRSxDQUFDLHlCQUFXLENBQUM7U0FDM0IsQ0FBQzs7eUJBQUE7SUE2R0Ysd0JBQUM7QUFBRCxDQUFDLEFBNUdELElBNEdDO0FBNUdZLHlCQUFpQixvQkE0RzdCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHtDaGVja0JveH0gZnJvbSAnbmF0aXZlc2NyaXB0LWNoZWNrYm94JztcclxuaW1wb3J0IHtyZWdpc3RlckVsZW1lbnR9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XHJcbnJlZ2lzdGVyRWxlbWVudChcIkNoZWNrQm94XCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY2hlY2tib3hcIikuQ2hlY2tCb3gpO1xyXG5pbXBvcnQge0h0dHBTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL3NlcnZpY2VzL2h0dHBTZXJ2aWNlXCI7XHJcblxyXG4vLyBOYXRpdmUgU2NyaXB0IGNvcmVcclxuaW1wb3J0IGltYWdlTW9kdWxlID0gcmVxdWlyZShcInVpL2ltYWdlXCIpO1xyXG5pbXBvcnQgY2FtZXJhTW9kdWxlID0gcmVxdWlyZShcImNhbWVyYVwiKTtcclxuaW1wb3J0IGVudW1zTW9kdWxlICA9IHJlcXVpcmUoJ3VpL2VudW1zJylcclxuaW1wb3J0IGZzTW9kdWxlID0gcmVxdWlyZShcImZpbGUtc3lzdGVtXCIpO1xyXG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xyXG5pbXBvcnQge0NvbG9yfSBmcm9tIFwiY29sb3JcIjtcclxuaW1wb3J0IHtEYXRlUGlja2VyfSBmcm9tIFwidWkvZGF0ZS1waWNrZXJcIjtcclxuXHJcbmxldCBjb2xvck1vZHVsZSA9IHJlcXVpcmUoXCJjb2xvclwiKTtcclxuXHJcbnJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtbG9jYWxzdG9yYWdlXCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1leHBlbnNlcycsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJleHBlbnNlcy9leHBlbnNlcy5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgcHJvdmlkZXJzOiBbSHR0cFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFeHBlbnNlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICB1c2VyTmFtZTogc3RyaW5nO1xyXG4gICAgaW1hZ2VTcmM6IGFueTtcclxuXHJcbiAgICBleHBUeXBlSW5kZXg6IG51bWJlcjtcclxuICAgIGNhdGVnb3J5OiBzdHJpbmc7XHJcblxyXG4gICAgbWluRGF0ZTogRGF0ZSA9IG5ldyBEYXRlKDIwMDAsMCwxKTtcclxuXHJcbiAgICBkZWZhdWx0VHlwZUNvbG9yOiBDb2xvciA9IG5ldyBjb2xvck1vZHVsZS5Db2xvcignd2hpdGUnKTtcclxuXHJcbiAgICBAVmlld0NoaWxkKFwiZm9vZFwiKSBmb29kOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZChcInBhcmtpbmdcIikgcGFya2luZzogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoXCJkcml2aW5nXCIpIGRyaXZpbmc6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKFwib3RoZXJcIikgb3RoZXI6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKFwiaW52b2ljZURhdGVcIikgaW52b2ljZURhdGU6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKFwiYW1vdW50XCIpIGFtb3VudDogRWxlbWVudFJlZjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgaHR0cFNlcnZpY2U6IEh0dHBTZXJ2aWNlLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcclxuICAgICAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgbGV0IGVtcGxveWVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VtcGxveWVlJyk7XHJcbiAgICAgICAgaWYgKGVtcGxveWVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlck5hbWUgPSBKU09OLnBhcnNlKGVtcGxveWVlKS5uYW1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBnZXREYXRlKCl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNldEFsbCgpIHtcclxuICAgICAgICB0aGlzLmRyaXZpbmcubmF0aXZlRWxlbWVudC5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLmRlZmF1bHRUeXBlQ29sb3I7XHJcbiAgICAgICAgdGhpcy5mb29kLm5hdGl2ZUVsZW1lbnQuYmFja2dyb3VuZENvbG9yID0gdGhpcy5kZWZhdWx0VHlwZUNvbG9yO1xyXG4gICAgICAgIHRoaXMucGFya2luZy5uYXRpdmVFbGVtZW50LmJhY2tncm91bmRDb2xvciA9IHRoaXMuZGVmYXVsdFR5cGVDb2xvcjtcclxuICAgICAgICB0aGlzLm90aGVyLm5hdGl2ZUVsZW1lbnQuYmFja2dyb3VuZENvbG9yID0gdGhpcy5kZWZhdWx0VHlwZUNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUGFya2luZ1RhcChpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5yZXNldEFsbCgpO1xyXG4gICAgICAgIHRoaXMucGFya2luZy5uYXRpdmVFbGVtZW50LmJhY2tncm91bmRDb2xvciA9IG5ldyBjb2xvck1vZHVsZS5Db2xvcignIzY0OTVlZCcpO1xyXG4gICAgICAgIHRoaXMuZXhwVHlwZUluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9ICdQYXJraW5nJztcclxuICAgIH1cclxuXHJcbiAgICBvbkZvb2RUYXAoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucmVzZXRBbGwoKTtcclxuICAgICAgICB0aGlzLmZvb2QubmF0aXZlRWxlbWVudC5iYWNrZ3JvdW5kQ29sb3IgPSBuZXcgY29sb3JNb2R1bGUuQ29sb3IoJyM2NDk1ZWQnKTtcclxuICAgICAgICB0aGlzLmV4cFR5cGVJbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSAnRm9vZCc7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ecml2aW5nVGFwKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnJlc2V0QWxsKCk7XHJcbiAgICAgICAgdGhpcy5kcml2aW5nLm5hdGl2ZUVsZW1lbnQuYmFja2dyb3VuZENvbG9yID0gbmV3IGNvbG9yTW9kdWxlLkNvbG9yKCcjNjQ5NWVkJyk7XHJcbiAgICAgICAgdGhpcy5leHBUeXBlSW5kZXggPSBpbmRleDtcclxuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gJ0RyaXZpbmcnO1xyXG4gICAgfVxyXG5cclxuICAgIG9uT3RoZXJUYXAoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucmVzZXRBbGwoKTtcclxuICAgICAgICB0aGlzLm90aGVyLm5hdGl2ZUVsZW1lbnQuYmFja2dyb3VuZENvbG9yID0gbmV3IGNvbG9yTW9kdWxlLkNvbG9yKCcjNjQ5NWVkJyk7XHJcbiAgICAgICAgdGhpcy5leHBUeXBlSW5kZXggPSBpbmRleDtcclxuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gJ090aGVyJztcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLnJlc2V0QWxsKCk7XHJcbiAgICAgICAgdGhpcy5hbW91bnQubmF0aXZlRWxlbWVudC50ZXh0ID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKGFtb3VudCkge1xyXG5cclxuICAgICAgICBsZXQgZGF0ZVBpY2tlciA9IDxEYXRlUGlja2VyPnRoaXMuaW52b2ljZURhdGUubmF0aXZlRWxlbWVudDtcclxuICAgICAgICBsZXQgaW52RGF0ZSA9IGRhdGVQaWNrZXIuZGF0ZSA/IGRhdGVQaWNrZXIuZGF0ZSA6IHRoaXMubWluRGF0ZTtcclxuXHJcbiAgICAgICAgY2FtZXJhTW9kdWxlLnRha2VQaWN0dXJlKHt3aWR0aDogNTAsIGhlaWdodDogNTAsIGtlZXBBc3BlY3RSYXRpbzogdHJ1ZX0pLnRoZW4oaW1hZ2VTb3VyY2UgPT4ge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pbWFnZVNyYyA9IGltYWdlU291cmNlO1xyXG5cclxuICAgICAgICAgICAgbGV0IGJhc2U2NGltZyA9IGltYWdlU291cmNlLnRvQmFzZTY0U3RyaW5nKFwianBnXCIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5odHRwU2VydmljZS51cGxvYWQoe1xyXG4gICAgICAgICAgICAgICAgdXNlcjogdGhpcy51c2VyTmFtZSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB0aGlzLmNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiBhbW91bnQsXHJcbiAgICAgICAgICAgICAgICBpbnZvaWNlRGF0ZTogaW52RGF0ZS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgcGljdHVyZTogYmFzZTY0aW1nXHJcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHJlc3BvbnNlLmNvbnRlbnQudG9KU09OKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICB9LCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igb2NjdXJyZWQgXCIgKyBlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dPdXQoKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2VtcGxveWVlJyk7XHJcblxyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvd2VsY29tZVwiXSwge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImZsaXBcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iXX0=