"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var httpService_1 = require("../shared/services/httpService");
var cameraModule = require("camera");
// Native Script core
var nativescript_angular_1 = require("nativescript-angular");
require("nativescript-localstorage");
var types_1 = require("utils/types");
var ExpensesComponent = (function () {
    function ExpensesComponent(page, httpService, routerExtensions) {
        this.page = page;
        this.httpService = httpService;
        this.routerExtensions = routerExtensions;
        this.minDate = new Date();
        this.base64StringImg = '';
        this.recipeNumber = '';
        page.actionBarHidden = true;
    }
    ExpensesComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('employee')) {
            this.employee = JSON.parse(localStorage.getItem('employee'));
        }
    };
    ExpensesComponent.prototype.logout = function () {
        localStorage.clear();
        this.routerExtensions.navigate(["welcome"], {
            transition: {
                name: "flip"
            }
        });
    };
    ExpensesComponent.prototype.setAmount = function (amount) {
        this.amount = amount;
    };
    ExpensesComponent.prototype.setCategory = function (category) {
        this.category = category;
    };
    ExpensesComponent.prototype.setDate = function (date) {
        this.invoiceDate = date;
    };
    ExpensesComponent.prototype.setImage = function (imgString) {
        this.base64StringImg = imgString;
    };
    ExpensesComponent.prototype.setRecipeNumber = function (recipeNumber) {
        this.recipeNumber = recipeNumber;
    };
    ExpensesComponent.prototype.sendInvoice = function () {
        var _this = this;
        var invDate = this.invoiceDate ? this.invoiceDate : this.minDate;
        var currentDate = new Date();
        var cameraAvailable = cameraModule.isAvailable();
        var valid = !types_1.isNullOrUndefined(this.category) && !types_1.isNullOrUndefined(this.amount);
        if (cameraAvailable) {
            valid = valid && !types_1.isNullOrUndefined(this.base64StringImg);
        }
        if (valid) {
            this.httpService.upload({
                empId: this.employee.id,
                empName: this.employee.name,
                type: this.category.name,
                amount: this.amount,
                invoiceDate: invDate.getTime(),
                createDate: currentDate.getTime(),
                image: this.base64StringImg,
                recipeNumber: this.recipeNumber
            }).subscribe(function (data) {
                _this.routerExtensions.navigate(["success"], {
                    transition: {
                        name: "flip"
                    }
                });
            }, function (error) {
                console.log('error---->', error);
                _this.routerExtensions.navigate(["failure"], {
                    transition: {
                        name: "flip"
                    }
                });
            });
        }
        else {
            console.log('not Valid');
            this.routerExtensions.navigate(["failure"], {
                transition: {
                    name: "flip"
                }
            });
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwZW5zZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXhwZW5zZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQscUJBQW1CLFNBQVMsQ0FBQyxDQUFBO0FBQzdCLDRCQUEwQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQzNELElBQU8sWUFBWSxXQUFXLFFBQVEsQ0FBQyxDQUFDO0FBRXhDLHFCQUFxQjtBQUNyQixxQ0FBK0Isc0JBQXNCLENBQUMsQ0FBQTtBQUl0RCxPQUFPLENBQUMsMkJBQTJCLENBQUMsQ0FBQztBQUNyQyxzQkFBZ0MsYUFBYSxDQUFDLENBQUE7QUFROUM7SUFTSSwyQkFBb0IsSUFBVSxFQUFVLFdBQXdCLEVBQVUsZ0JBQWtDO1FBQXhGLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFONUcsWUFBTyxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7UUFHM0Isb0JBQWUsR0FBVyxFQUFFLENBQUM7UUFDN0IsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFHdEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDaEMsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDSSxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLENBQUM7SUFDTCxDQUFDO0lBRUQsa0NBQU0sR0FBTjtRQUNJLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLEVB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Q0FBQztJQWhHTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsa0NBQWtDO1lBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO1lBQzlDLFNBQVMsRUFBRSxDQUFDLHlCQUFXLENBQUM7U0FDM0IsQ0FBQzs7eUJBQUE7SUE0RkYsd0JBQUM7QUFBRCxDQUFDLEFBM0ZELElBMkZDO0FBM0ZZLHlCQUFpQixvQkEyRjdCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7SHR0cFNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvc2VydmljZXMvaHR0cFNlcnZpY2VcIjtcclxuaW1wb3J0IGNhbWVyYU1vZHVsZSA9IHJlcXVpcmUoXCJjYW1lcmFcIik7XHJcblxyXG4vLyBOYXRpdmUgU2NyaXB0IGNvcmVcclxuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcclxuaW1wb3J0IHtJRW1wbG95ZWV9IGZyb20gXCIuLi9zaGFyZWQvaW50ZXJmYWNlcy9JRW1wbG95ZWVcIjtcclxuaW1wb3J0IHtJQ2F0ZWdvcnl9IGZyb20gXCIuLi9zaGFyZWQvaW50ZXJmYWNlcy9JQ2F0ZWdvcnlcIjtcclxuXHJcbnJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtbG9jYWxzdG9yYWdlXCIpO1xyXG5pbXBvcnQge2lzTnVsbE9yVW5kZWZpbmVkfSBmcm9tIFwidXRpbHMvdHlwZXNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtZXhwZW5zZXMnLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiZXhwZW5zZXMvZXhwZW5zZXMuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogWydleHBlbnNlcy9leHBlbnNlcy5jb21wb25lbnQuY3NzJ10sXHJcbiAgICBwcm92aWRlcnM6IFtIdHRwU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEV4cGVuc2VzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGVtcGxveWVlOiBJRW1wbG95ZWU7XHJcbiAgICBjYXRlZ29yeTogSUNhdGVnb3J5O1xyXG4gICAgbWluRGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBhbW91bnQ6IG51bWJlcjtcclxuICAgIGludm9pY2VEYXRlOiBEYXRlO1xyXG4gICAgYmFzZTY0U3RyaW5nSW1nOiBzdHJpbmcgPSAnJztcclxuICAgIHJlY2lwZU51bWJlcjogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIGh0dHBTZXJ2aWNlOiBIdHRwU2VydmljZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XHJcbiAgICAgICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW1wbG95ZWUnKSkge1xyXG4gICAgICAgICAgICB0aGlzLmVtcGxveWVlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW1wbG95ZWUnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvZ291dCgpe1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJ3ZWxjb21lXCJdLCB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiZmxpcFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBbW91bnQoYW1vdW50KSB7XHJcbiAgICAgICAgdGhpcy5hbW91bnQgPSBhbW91bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2F0ZWdvcnkoY2F0ZWdvcnk6IElDYXRlZ29yeSkge1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcclxuICAgIH1cclxuXHJcbiAgICBzZXREYXRlKGRhdGUpIHtcclxuICAgICAgICB0aGlzLmludm9pY2VEYXRlID0gZGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJbWFnZShpbWdTdHJpbmc6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuYmFzZTY0U3RyaW5nSW1nID0gaW1nU3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFJlY2lwZU51bWJlcihyZWNpcGVOdW1iZXI6IHN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5yZWNpcGVOdW1iZXIgPSByZWNpcGVOdW1iZXI7XHJcbiAgICB9XHJcblxyXG4gICAgc2VuZEludm9pY2UoKSB7XHJcbiAgICAgICAgbGV0IGludkRhdGUgPSB0aGlzLmludm9pY2VEYXRlID8gdGhpcy5pbnZvaWNlRGF0ZSA6IHRoaXMubWluRGF0ZTtcclxuICAgICAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGxldCBjYW1lcmFBdmFpbGFibGU6IEJvb2xlYW4gPSBjYW1lcmFNb2R1bGUuaXNBdmFpbGFibGUoKTtcclxuXHJcbiAgICAgICAgbGV0IHZhbGlkID0gIWlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuY2F0ZWdvcnkpICYmICFpc051bGxPclVuZGVmaW5lZCh0aGlzLmFtb3VudCk7XHJcbiAgICAgICAgaWYgKGNhbWVyYUF2YWlsYWJsZSl7XHJcbiAgICAgICAgICAgIHZhbGlkID0gdmFsaWQgJiYgIWlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuYmFzZTY0U3RyaW5nSW1nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh2YWxpZCl7XHJcbiAgICAgICAgICAgIHRoaXMuaHR0cFNlcnZpY2UudXBsb2FkKHtcclxuICAgICAgICAgICAgICAgIGVtcElkOiB0aGlzLmVtcGxveWVlLmlkLFxyXG4gICAgICAgICAgICAgICAgZW1wTmFtZTogdGhpcy5lbXBsb3llZS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogdGhpcy5jYXRlZ29yeS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiB0aGlzLmFtb3VudCxcclxuICAgICAgICAgICAgICAgIGludm9pY2VEYXRlOiBpbnZEYXRlLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZURhdGU6IGN1cnJlbnREYXRlLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgICAgIGltYWdlOiB0aGlzLmJhc2U2NFN0cmluZ0ltZyxcclxuICAgICAgICAgICAgICAgIHJlY2lwZU51bWJlcjogdGhpcy5yZWNpcGVOdW1iZXJcclxuICAgICAgICAgICAgfSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcInN1Y2Nlc3NcIl0sIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZmxpcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvci0tLS0+JyxlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiZmFpbHVyZVwiXSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJmbGlwXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vdCBWYWxpZCcpO1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiZmFpbHVyZVwiXSwge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZmxpcFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdfQ==