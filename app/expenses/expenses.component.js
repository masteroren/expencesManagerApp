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
        // let currentDate = new Date();
        // console.log('setDate => ', date);
        // console.log('current date => ', currentDate);
        // this.invoiceDate = new Date(date);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwZW5zZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXhwZW5zZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQscUJBQW1CLFNBQVMsQ0FBQyxDQUFBO0FBQzdCLDRCQUEwQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQzNELElBQU8sWUFBWSxXQUFXLFFBQVEsQ0FBQyxDQUFDO0FBRXhDLHFCQUFxQjtBQUNyQixxQ0FBK0Isc0JBQXNCLENBQUMsQ0FBQTtBQUl0RCxPQUFPLENBQUMsMkJBQTJCLENBQUMsQ0FBQztBQUNyQyxzQkFBZ0MsYUFBYSxDQUFDLENBQUE7QUFROUM7SUFTSSwyQkFBb0IsSUFBVSxFQUFVLFdBQXdCLEVBQVUsZ0JBQWtDO1FBQXhGLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFONUcsWUFBTyxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7UUFHM0Isb0JBQWUsR0FBVyxFQUFFLENBQUM7UUFDN0IsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFHdEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDaEMsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDSSxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLENBQUM7SUFDTCxDQUFDO0lBRUQsa0NBQU0sR0FBTjtRQUNJLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLEVB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QztRQUNQLENBQUM7SUFDTCxDQUFDO0lBcEdMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSxrQ0FBa0M7WUFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7WUFDOUMsU0FBUyxFQUFFLENBQUMseUJBQVcsQ0FBQztTQUMzQixDQUFDOzt5QkFBQTtJQWdHRix3QkFBQztBQUFELENBQUMsQUEvRkQsSUErRkM7QUEvRlkseUJBQWlCLG9CQStGN0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHtIdHRwU2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC9zZXJ2aWNlcy9odHRwU2VydmljZVwiO1xyXG5pbXBvcnQgY2FtZXJhTW9kdWxlID0gcmVxdWlyZShcImNhbWVyYVwiKTtcclxuXHJcbi8vIE5hdGl2ZSBTY3JpcHQgY29yZVxyXG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xyXG5pbXBvcnQge0lFbXBsb3llZX0gZnJvbSBcIi4uL3NoYXJlZC9pbnRlcmZhY2VzL0lFbXBsb3llZVwiO1xyXG5pbXBvcnQge0lDYXRlZ29yeX0gZnJvbSBcIi4uL3NoYXJlZC9pbnRlcmZhY2VzL0lDYXRlZ29yeVwiO1xyXG5cclxucmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1sb2NhbHN0b3JhZ2VcIik7XHJcbmltcG9ydCB7aXNOdWxsT3JVbmRlZmluZWR9IGZyb20gXCJ1dGlscy90eXBlc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1leHBlbnNlcycsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJleHBlbnNlcy9leHBlbnNlcy5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJ2V4cGVuc2VzL2V4cGVuc2VzLmNvbXBvbmVudC5jc3MnXSxcclxuICAgIHByb3ZpZGVyczogW0h0dHBTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXhwZW5zZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgZW1wbG95ZWU6IElFbXBsb3llZTtcclxuICAgIGNhdGVnb3J5OiBJQ2F0ZWdvcnk7XHJcbiAgICBtaW5EYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGFtb3VudDogbnVtYmVyO1xyXG4gICAgaW52b2ljZURhdGU6IERhdGU7XHJcbiAgICBiYXNlNjRTdHJpbmdJbWc6IHN0cmluZyA9ICcnO1xyXG4gICAgcmVjaXBlTnVtYmVyOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgaHR0cFNlcnZpY2U6IEh0dHBTZXJ2aWNlLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcclxuICAgICAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbXBsb3llZScpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1wbG95ZWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbXBsb3llZScpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9nb3V0KCl7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIndlbGNvbWVcIl0sIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJmbGlwXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFtb3VudChhbW91bnQpIHtcclxuICAgICAgICB0aGlzLmFtb3VudCA9IGFtb3VudDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDYXRlZ29yeShjYXRlZ29yeTogSUNhdGVnb3J5KSB7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9IGNhdGVnb3J5O1xyXG4gICAgfVxyXG5cclxuICAgIHNldERhdGUoZGF0ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnc2V0RGF0ZSA9PiAnLCBkYXRlKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnY3VycmVudCBkYXRlID0+ICcsIGN1cnJlbnREYXRlKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5pbnZvaWNlRGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEltYWdlKGltZ1N0cmluZzogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5iYXNlNjRTdHJpbmdJbWcgPSBpbWdTdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UmVjaXBlTnVtYmVyKHJlY2lwZU51bWJlcjogc3RyaW5nKXtcclxuICAgICAgICB0aGlzLnJlY2lwZU51bWJlciA9IHJlY2lwZU51bWJlcjtcclxuICAgIH1cclxuXHJcbiAgICBzZW5kSW52b2ljZSgpIHtcclxuICAgICAgICBsZXQgaW52RGF0ZSA9IHRoaXMuaW52b2ljZURhdGUgPyB0aGlzLmludm9pY2VEYXRlIDogdGhpcy5taW5EYXRlO1xyXG4gICAgICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgbGV0IGNhbWVyYUF2YWlsYWJsZTogQm9vbGVhbiA9IGNhbWVyYU1vZHVsZS5pc0F2YWlsYWJsZSgpO1xyXG5cclxuICAgICAgICBsZXQgdmFsaWQgPSAhaXNOdWxsT3JVbmRlZmluZWQodGhpcy5jYXRlZ29yeSkgJiYgIWlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuYW1vdW50KTtcclxuICAgICAgICBpZiAoY2FtZXJhQXZhaWxhYmxlKXtcclxuICAgICAgICAgICAgdmFsaWQgPSB2YWxpZCAmJiAhaXNOdWxsT3JVbmRlZmluZWQodGhpcy5iYXNlNjRTdHJpbmdJbWcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHZhbGlkKXtcclxuICAgICAgICAgICAgdGhpcy5odHRwU2VydmljZS51cGxvYWQoe1xyXG4gICAgICAgICAgICAgICAgZW1wSWQ6IHRoaXMuZW1wbG95ZWUuaWQsXHJcbiAgICAgICAgICAgICAgICBlbXBOYW1lOiB0aGlzLmVtcGxveWVlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiB0aGlzLmNhdGVnb3J5Lm5hbWUsXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHRoaXMuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgaW52b2ljZURhdGU6IGludkRhdGUuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlRGF0ZTogY3VycmVudERhdGUuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHRoaXMuYmFzZTY0U3RyaW5nSW1nLFxyXG4gICAgICAgICAgICAgICAgcmVjaXBlTnVtYmVyOiB0aGlzLnJlY2lwZU51bWJlclxyXG4gICAgICAgICAgICB9KS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wic3VjY2Vzc1wiXSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJmbGlwXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yLS0tLT4nLGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJmYWlsdXJlXCJdLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImZsaXBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm90IFZhbGlkJyk7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJmYWlsdXJlXCJdLCB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJmbGlwXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl19