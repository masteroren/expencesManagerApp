"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var httpService_1 = require("../shared/services/httpService");
// Native Script core
var cameraModule = require("camera");
var nativescript_angular_1 = require("nativescript-angular");
require("nativescript-localstorage");
var ExpensesComponent = (function () {
    function ExpensesComponent(page, httpService, routerExtensions) {
        this.page = page;
        this.httpService = httpService;
        this.routerExtensions = routerExtensions;
        this.minDate = new Date();
        this.cameraAvailable = cameraModule.isAvailable();
        this.base64StringImg = '';
        page.actionBarHidden = true;
    }
    ExpensesComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('employee')) {
            this.employee = JSON.parse(localStorage.getItem('employee'));
        }
        console.log('camera available => ', cameraModule.isAvailable());
    };
    // clear() {
    //     this.resetAll();
    //     this.amount.nativeElement.text = '';
    // }
    ExpensesComponent.prototype.setAmount = function (amount) {
        this.amount = amount;
        console.log('Amount => ', this.amount);
    };
    ExpensesComponent.prototype.setCategory = function (e) {
        this.category = e;
        console.log('Category selected => ', this.category);
    };
    ExpensesComponent.prototype.setDate = function (date) {
        this.invoiceDate = date;
        console.log('Date => ', this.invoiceDate);
    };
    ExpensesComponent.prototype.takePicture = function () {
        var _this = this;
        if (this.cameraAvailable) {
            cameraModule.takePicture({ width: 50, height: 50, keepAspectRatio: true }).then(function (imageSource) {
                _this.imageSrc = imageSource;
                _this.base64StringImg = imageSource.toBase64String("jpg");
            });
        }
    };
    ExpensesComponent.prototype.sendInvoice = function () {
        var invDate = this.invoiceDate ? this.invoiceDate : this.minDate;
        var currentDate = new Date();
        this.httpService.upload({
            empName: this.employee.name,
            type: this.category,
            amount: this.amount,
            invoiceDate: invDate.getTime(),
            createDate: currentDate.getTime(),
            image: this.base64StringImg
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwZW5zZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXhwZW5zZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBdUQsZUFBZSxDQUFDLENBQUE7QUFDdkUscUJBQW1CLFNBQVMsQ0FBQyxDQUFBO0FBQzdCLDRCQUEwQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBRTNELHFCQUFxQjtBQUNyQixJQUFPLFlBQVksV0FBVyxRQUFRLENBQUMsQ0FBQztBQUN4QyxxQ0FBK0Isc0JBQXNCLENBQUMsQ0FBQTtBQUl0RCxPQUFPLENBQUMsMkJBQTJCLENBQUMsQ0FBQztBQVFyQztJQVVJLDJCQUFvQixJQUFVLEVBQVUsV0FBd0IsRUFBVSxnQkFBa0M7UUFBeEYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQU41RyxZQUFPLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUMzQixvQkFBZSxHQUFZLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUd0RCxvQkFBZSxHQUFXLEVBQUUsQ0FBQztRQUd6QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNJLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDakUsQ0FBQztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUE7SUFDbkUsQ0FBQztJQUVELFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsMkNBQTJDO0lBQzNDLElBQUk7SUFFSixxQ0FBUyxHQUFULFVBQVUsTUFBTTtRQUNaLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsdUNBQVcsR0FBWCxVQUFZLENBQUM7UUFDVCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsbUNBQU8sR0FBUCxVQUFRLElBQUk7UUFDUixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELHVDQUFXLEdBQVg7UUFBQSxpQkFPQztRQU5HLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLFlBQVksQ0FBQyxXQUFXLENBQUMsRUFBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsV0FBVztnQkFDckYsS0FBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxlQUFlLEdBQUcsV0FBVyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3RCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7SUFDTCxDQUFDO0lBRUQsdUNBQVcsR0FBWDtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ2pFLElBQUksV0FBVyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFFN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFDcEIsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSTtZQUMzQixJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDbkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLFdBQVcsRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQzlCLFVBQVUsRUFBRSxXQUFXLENBQUMsT0FBTyxFQUFFO1lBQ2pDLEtBQUssRUFBRSxJQUFJLENBQUMsZUFBZTtTQUM5QixDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsa0NBQU0sR0FBTjtRQUNJLFlBQVksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFcEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3pDLFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsTUFBTTthQUNmO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGlDQUFLLEdBQUw7SUFDQSxDQUFDO0lBbkZMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSxrQ0FBa0M7WUFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7WUFDOUMsU0FBUyxFQUFFLENBQUMseUJBQVcsQ0FBQztTQUMzQixDQUFDOzt5QkFBQTtJQStFRix3QkFBQztBQUFELENBQUMsQUE5RUQsSUE4RUM7QUE5RVkseUJBQWlCLG9CQThFN0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQge0h0dHBTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL3NlcnZpY2VzL2h0dHBTZXJ2aWNlXCI7XHJcblxyXG4vLyBOYXRpdmUgU2NyaXB0IGNvcmVcclxuaW1wb3J0IGNhbWVyYU1vZHVsZSA9IHJlcXVpcmUoXCJjYW1lcmFcIik7XHJcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XHJcbmltcG9ydCB7RGF0ZVBpY2tlcn0gZnJvbSBcInVpL2RhdGUtcGlja2VyXCI7XHJcbmltcG9ydCB7SUVtcGxveWVlfSBmcm9tIFwiLi4vc2hhcmVkL2ludGVyZmFjZXMvSUVtcGxveWVlXCI7XHJcblxyXG5yZXF1aXJlKFwibmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZVwiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtZXhwZW5zZXMnLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiZXhwZW5zZXMvZXhwZW5zZXMuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogWydleHBlbnNlcy9leHBlbnNlcy5jb21wb25lbnQuY3NzJ10sXHJcbiAgICBwcm92aWRlcnM6IFtIdHRwU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEV4cGVuc2VzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGVtcGxveWVlOiBJRW1wbG95ZWU7XHJcbiAgICBpbWFnZVNyYzogYW55O1xyXG4gICAgY2F0ZWdvcnk6IHN0cmluZztcclxuICAgIG1pbkRhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY2FtZXJhQXZhaWxhYmxlOiBCb29sZWFuID0gY2FtZXJhTW9kdWxlLmlzQXZhaWxhYmxlKCk7XHJcbiAgICBhbW91bnQ6IG51bWJlcjtcclxuICAgIGludm9pY2VEYXRlOiBEYXRlO1xyXG4gICAgYmFzZTY0U3RyaW5nSW1nOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgaHR0cFNlcnZpY2U6IEh0dHBTZXJ2aWNlLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcclxuICAgICAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbXBsb3llZScpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1wbG95ZWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbXBsb3llZScpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NhbWVyYSBhdmFpbGFibGUgPT4gJywgY2FtZXJhTW9kdWxlLmlzQXZhaWxhYmxlKCkpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2xlYXIoKSB7XHJcbiAgICAvLyAgICAgdGhpcy5yZXNldEFsbCgpO1xyXG4gICAgLy8gICAgIHRoaXMuYW1vdW50Lm5hdGl2ZUVsZW1lbnQudGV4dCA9ICcnO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHNldEFtb3VudChhbW91bnQpIHtcclxuICAgICAgICB0aGlzLmFtb3VudCA9IGFtb3VudDtcclxuICAgICAgICBjb25zb2xlLmxvZygnQW1vdW50ID0+ICcsIHRoaXMuYW1vdW50KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDYXRlZ29yeShlKSB7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9IGU7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NhdGVnb3J5IHNlbGVjdGVkID0+ICcsIHRoaXMuY2F0ZWdvcnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERhdGUoZGF0ZSkge1xyXG4gICAgICAgIHRoaXMuaW52b2ljZURhdGUgPSBkYXRlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdEYXRlID0+ICcsIHRoaXMuaW52b2ljZURhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRha2VQaWN0dXJlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNhbWVyYUF2YWlsYWJsZSkge1xyXG4gICAgICAgICAgICBjYW1lcmFNb2R1bGUudGFrZVBpY3R1cmUoe3dpZHRoOiA1MCwgaGVpZ2h0OiA1MCwga2VlcEFzcGVjdFJhdGlvOiB0cnVlfSkudGhlbihpbWFnZVNvdXJjZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlU3JjID0gaW1hZ2VTb3VyY2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhc2U2NFN0cmluZ0ltZyA9IGltYWdlU291cmNlLnRvQmFzZTY0U3RyaW5nKFwianBnXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2VuZEludm9pY2UoKSB7XHJcbiAgICAgICAgbGV0IGludkRhdGUgPSB0aGlzLmludm9pY2VEYXRlID8gdGhpcy5pbnZvaWNlRGF0ZSA6IHRoaXMubWluRGF0ZTtcclxuICAgICAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmh0dHBTZXJ2aWNlLnVwbG9hZCh7XHJcbiAgICAgICAgICAgIGVtcE5hbWU6IHRoaXMuZW1wbG95ZWUubmFtZSxcclxuICAgICAgICAgICAgdHlwZTogdGhpcy5jYXRlZ29yeSxcclxuICAgICAgICAgICAgYW1vdW50OiB0aGlzLmFtb3VudCxcclxuICAgICAgICAgICAgaW52b2ljZURhdGU6IGludkRhdGUuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBjcmVhdGVEYXRlOiBjdXJyZW50RGF0ZS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGltYWdlOiB0aGlzLmJhc2U2NFN0cmluZ0ltZ1xyXG4gICAgICAgIH0pLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nT3V0KCkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdlbXBsb3llZScpO1xyXG5cclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL3dlbGNvbWVcIl0sIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJmbGlwXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVGFwKCkge1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl19