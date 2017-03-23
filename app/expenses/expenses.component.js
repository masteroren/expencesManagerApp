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
        console.log('init');
        if (localStorage.getItem('employee')) {
            this.employee = JSON.parse(localStorage.getItem('employee'));
        }
        console.log('camera available => ', cameraModule.isAvailable());
    };
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
        var _this = this;
        if (this.valid()) {
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
                _this.routerExtensions.navigate(["/finish", 0], {
                    transition: {
                        name: "flip"
                    }
                });
            });
        }
        else {
        }
    };
    ExpensesComponent.prototype.valid = function () {
        // return this.category && this.amount && this.invoiceDate && this.base64StringImg;
        return true;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwZW5zZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXhwZW5zZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBdUQsZUFBZSxDQUFDLENBQUE7QUFDdkUscUJBQW1CLFNBQVMsQ0FBQyxDQUFBO0FBQzdCLDRCQUEwQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBRTNELHFCQUFxQjtBQUNyQixJQUFPLFlBQVksV0FBVyxRQUFRLENBQUMsQ0FBQztBQUN4QyxxQ0FBK0Isc0JBQXNCLENBQUMsQ0FBQTtBQUd0RCxPQUFPLENBQUMsMkJBQTJCLENBQUMsQ0FBQztBQVFyQztJQVVJLDJCQUFvQixJQUFVLEVBQVUsV0FBd0IsRUFBVSxnQkFBa0M7UUFBeEYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQU41RyxZQUFPLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUMzQixvQkFBZSxHQUFZLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUd0RCxvQkFBZSxHQUFXLEVBQUUsQ0FBQztRQUd6QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNqRSxDQUFDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQTtJQUNuRSxDQUFDO0lBRUQscUNBQVMsR0FBVCxVQUFVLE1BQU07UUFDWixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELHVDQUFXLEdBQVgsVUFBWSxDQUFDO1FBQ1QsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELG1DQUFPLEdBQVAsVUFBUSxJQUFJO1FBQ1IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCx1Q0FBVyxHQUFYO1FBQUEsaUJBT0M7UUFORyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztZQUN2QixZQUFZLENBQUMsV0FBVyxDQUFDLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLFdBQVc7Z0JBQ3JGLEtBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO2dCQUM1QixLQUFJLENBQUMsZUFBZSxHQUFHLFdBQVcsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0QsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0lBQ0wsQ0FBQztJQUVELHVDQUFXLEdBQVg7UUFBQSxpQkFzQkM7UUFyQkcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNmLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ2pFLElBQUksV0FBVyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7WUFFN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7Z0JBQ3BCLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUk7Z0JBQzNCLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUTtnQkFDbkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2dCQUNuQixXQUFXLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRTtnQkFDOUIsVUFBVSxFQUFFLFdBQVcsQ0FBQyxPQUFPLEVBQUU7Z0JBQ2pDLEtBQUssRUFBRSxJQUFJLENBQUMsZUFBZTthQUM5QixDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtnQkFDYixLQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFO29CQUMzQyxVQUFVLEVBQUU7d0JBQ1IsSUFBSSxFQUFFLE1BQU07cUJBQ2Y7aUJBQ0osQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7UUFFUixDQUFDO0lBQ0wsQ0FBQztJQUVELGlDQUFLLEdBQUw7UUFDSSxtRkFBbUY7UUFDbkYsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBL0VMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSxrQ0FBa0M7WUFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7WUFDOUMsU0FBUyxFQUFFLENBQUMseUJBQVcsQ0FBQztTQUMzQixDQUFDOzt5QkFBQTtJQTJFRix3QkFBQztBQUFELENBQUMsQUExRUQsSUEwRUM7QUExRVkseUJBQWlCLG9CQTBFN0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQge0h0dHBTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL3NlcnZpY2VzL2h0dHBTZXJ2aWNlXCI7XHJcblxyXG4vLyBOYXRpdmUgU2NyaXB0IGNvcmVcclxuaW1wb3J0IGNhbWVyYU1vZHVsZSA9IHJlcXVpcmUoXCJjYW1lcmFcIik7XHJcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XHJcbmltcG9ydCB7SUVtcGxveWVlfSBmcm9tIFwiLi4vc2hhcmVkL2ludGVyZmFjZXMvSUVtcGxveWVlXCI7XHJcblxyXG5yZXF1aXJlKFwibmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZVwiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtZXhwZW5zZXMnLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiZXhwZW5zZXMvZXhwZW5zZXMuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogWydleHBlbnNlcy9leHBlbnNlcy5jb21wb25lbnQuY3NzJ10sXHJcbiAgICBwcm92aWRlcnM6IFtIdHRwU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEV4cGVuc2VzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGVtcGxveWVlOiBJRW1wbG95ZWU7XHJcbiAgICBpbWFnZVNyYzogYW55O1xyXG4gICAgY2F0ZWdvcnk6IHN0cmluZztcclxuICAgIG1pbkRhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY2FtZXJhQXZhaWxhYmxlOiBCb29sZWFuID0gY2FtZXJhTW9kdWxlLmlzQXZhaWxhYmxlKCk7XHJcbiAgICBhbW91bnQ6IG51bWJlcjtcclxuICAgIGludm9pY2VEYXRlOiBEYXRlO1xyXG4gICAgYmFzZTY0U3RyaW5nSW1nOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgaHR0cFNlcnZpY2U6IEh0dHBTZXJ2aWNlLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcclxuICAgICAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2luaXQnKTtcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VtcGxveWVlJykpIHtcclxuICAgICAgICAgICAgdGhpcy5lbXBsb3llZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VtcGxveWVlJykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZygnY2FtZXJhIGF2YWlsYWJsZSA9PiAnLCBjYW1lcmFNb2R1bGUuaXNBdmFpbGFibGUoKSlcclxuICAgIH1cclxuXHJcbiAgICBzZXRBbW91bnQoYW1vdW50KSB7XHJcbiAgICAgICAgdGhpcy5hbW91bnQgPSBhbW91bnQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Ftb3VudCA9PiAnLCB0aGlzLmFtb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2F0ZWdvcnkoZSkge1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSBlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDYXRlZ29yeSBzZWxlY3RlZCA9PiAnLCB0aGlzLmNhdGVnb3J5KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXREYXRlKGRhdGUpIHtcclxuICAgICAgICB0aGlzLmludm9pY2VEYXRlID0gZGF0ZTtcclxuICAgICAgICBjb25zb2xlLmxvZygnRGF0ZSA9PiAnLCB0aGlzLmludm9pY2VEYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICB0YWtlUGljdHVyZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5jYW1lcmFBdmFpbGFibGUpIHtcclxuICAgICAgICAgICAgY2FtZXJhTW9kdWxlLnRha2VQaWN0dXJlKHt3aWR0aDogNTAsIGhlaWdodDogNTAsIGtlZXBBc3BlY3RSYXRpbzogdHJ1ZX0pLnRoZW4oaW1hZ2VTb3VyY2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZVNyYyA9IGltYWdlU291cmNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYXNlNjRTdHJpbmdJbWcgPSBpbWFnZVNvdXJjZS50b0Jhc2U2NFN0cmluZyhcImpwZ1wiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNlbmRJbnZvaWNlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbGlkKCkpIHtcclxuICAgICAgICAgICAgbGV0IGludkRhdGUgPSB0aGlzLmludm9pY2VEYXRlID8gdGhpcy5pbnZvaWNlRGF0ZSA6IHRoaXMubWluRGF0ZTtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaHR0cFNlcnZpY2UudXBsb2FkKHtcclxuICAgICAgICAgICAgICAgIGVtcE5hbWU6IHRoaXMuZW1wbG95ZWUubmFtZSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IHRoaXMuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHRoaXMuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgaW52b2ljZURhdGU6IGludkRhdGUuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlRGF0ZTogY3VycmVudERhdGUuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHRoaXMuYmFzZTY0U3RyaW5nSW1nXHJcbiAgICAgICAgICAgIH0pLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvZmluaXNoXCIsIDBdLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImZsaXBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWQoKSB7XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuY2F0ZWdvcnkgJiYgdGhpcy5hbW91bnQgJiYgdGhpcy5pbnZvaWNlRGF0ZSAmJiB0aGlzLmJhc2U2NFN0cmluZ0ltZztcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdfQ==