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
    ExpensesComponent.prototype.setCustomType = function (value) {
        this.customType = value;
    };
    ExpensesComponent.prototype.setAmount = function (amount) {
        this.amount = amount;
    };
    ExpensesComponent.prototype.setCategory = function (category) {
        this.category = category;
    };
    ExpensesComponent.prototype.setDate = function (date) {
        this.invoiceDate = new Date(date);
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
                type: this.category.id === 0 ? this.customType : this.category.name,
                amount: this.amount,
                invoiceDate: invDate.getTime(),
                createDate: currentDate.getTime(),
                image: this.base64StringImg
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwZW5zZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXhwZW5zZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQscUJBQW1CLFNBQVMsQ0FBQyxDQUFBO0FBQzdCLDRCQUEwQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQzNELElBQU8sWUFBWSxXQUFXLFFBQVEsQ0FBQyxDQUFDO0FBRXhDLHFCQUFxQjtBQUNyQixxQ0FBK0Isc0JBQXNCLENBQUMsQ0FBQTtBQUl0RCxPQUFPLENBQUMsMkJBQTJCLENBQUMsQ0FBQztBQUNyQyxzQkFBZ0MsYUFBYSxDQUFDLENBQUE7QUFROUM7SUFVSSwyQkFBb0IsSUFBVSxFQUFVLFdBQXdCLEVBQVUsZ0JBQWtDO1FBQXhGLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFQNUcsWUFBTyxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7UUFJM0Isb0JBQWUsR0FBVyxFQUFFLENBQUM7UUFDN0IsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFHdEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDaEMsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDSSxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLENBQUM7SUFDTCxDQUFDO0lBRUQsa0NBQU0sR0FBTjtRQUNJLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLEVB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LENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQ3hDLFVBQVUsRUFBRTtvQkFDUixJQUFJLEVBQUUsTUFBTTtpQkFDZjthQUNKLENBQUMsQ0FBQztRQUNQLENBQUM7SUFDTCxDQUFDO0lBcEdMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSxrQ0FBa0M7WUFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7WUFDOUMsU0FBUyxFQUFFLENBQUMseUJBQVcsQ0FBQztTQUMzQixDQUFDOzt5QkFBQTtJQWdHRix3QkFBQztBQUFELENBQUMsQUEvRkQsSUErRkM7QUEvRlkseUJBQWlCLG9CQStGN0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHtIdHRwU2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC9zZXJ2aWNlcy9odHRwU2VydmljZVwiO1xyXG5pbXBvcnQgY2FtZXJhTW9kdWxlID0gcmVxdWlyZShcImNhbWVyYVwiKTtcclxuXHJcbi8vIE5hdGl2ZSBTY3JpcHQgY29yZVxyXG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xyXG5pbXBvcnQge0lFbXBsb3llZX0gZnJvbSBcIi4uL3NoYXJlZC9pbnRlcmZhY2VzL0lFbXBsb3llZVwiO1xyXG5pbXBvcnQge0lDYXRlZ29yeX0gZnJvbSBcIi4uL3NoYXJlZC9pbnRlcmZhY2VzL0lDYXRlZ29yeVwiO1xyXG5cclxucmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1sb2NhbHN0b3JhZ2VcIik7XHJcbmltcG9ydCB7aXNOdWxsT3JVbmRlZmluZWR9IGZyb20gXCJ1dGlscy90eXBlc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1leHBlbnNlcycsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJleHBlbnNlcy9leHBlbnNlcy5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJ2V4cGVuc2VzL2V4cGVuc2VzLmNvbXBvbmVudC5jc3MnXSxcclxuICAgIHByb3ZpZGVyczogW0h0dHBTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXhwZW5zZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgZW1wbG95ZWU6IElFbXBsb3llZTtcclxuICAgIGNhdGVnb3J5OiBJQ2F0ZWdvcnk7XHJcbiAgICBtaW5EYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGFtb3VudDogbnVtYmVyO1xyXG4gICAgY3VzdG9tVHlwZTogc3RyaW5nO1xyXG4gICAgaW52b2ljZURhdGU6IERhdGU7XHJcbiAgICBiYXNlNjRTdHJpbmdJbWc6IHN0cmluZyA9ICcnO1xyXG4gICAgcmVjaXBlTnVtYmVyOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgaHR0cFNlcnZpY2U6IEh0dHBTZXJ2aWNlLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcclxuICAgICAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbXBsb3llZScpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1wbG95ZWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbXBsb3llZScpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9nb3V0KCkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJ3ZWxjb21lXCJdLCB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiZmxpcFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDdXN0b21UeXBlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmN1c3RvbVR5cGUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBbW91bnQoYW1vdW50KSB7XHJcbiAgICAgICAgdGhpcy5hbW91bnQgPSBhbW91bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2F0ZWdvcnkoY2F0ZWdvcnk6IElDYXRlZ29yeSkge1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcclxuICAgIH1cclxuXHJcbiAgICBzZXREYXRlKGRhdGU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuaW52b2ljZURhdGUgPSBuZXcgRGF0ZShkYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJbWFnZShpbWdTdHJpbmc6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuYmFzZTY0U3RyaW5nSW1nID0gaW1nU3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFJlY2lwZU51bWJlcihyZWNpcGVOdW1iZXI6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMucmVjaXBlTnVtYmVyID0gcmVjaXBlTnVtYmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbmRJbnZvaWNlKCkge1xyXG4gICAgICAgIGxldCBpbnZEYXRlID0gdGhpcy5pbnZvaWNlRGF0ZSA/IHRoaXMuaW52b2ljZURhdGUgOiB0aGlzLm1pbkRhdGU7XHJcbiAgICAgICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICBsZXQgY2FtZXJhQXZhaWxhYmxlOiBCb29sZWFuID0gY2FtZXJhTW9kdWxlLmlzQXZhaWxhYmxlKCk7XHJcblxyXG4gICAgICAgIGxldCB2YWxpZCA9ICFpc051bGxPclVuZGVmaW5lZCh0aGlzLmNhdGVnb3J5KSAmJiAhaXNOdWxsT3JVbmRlZmluZWQodGhpcy5hbW91bnQpO1xyXG4gICAgICAgIGlmIChjYW1lcmFBdmFpbGFibGUpIHtcclxuICAgICAgICAgICAgdmFsaWQgPSB2YWxpZCAmJiAhaXNOdWxsT3JVbmRlZmluZWQodGhpcy5iYXNlNjRTdHJpbmdJbWcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaHR0cFNlcnZpY2UudXBsb2FkKHtcclxuICAgICAgICAgICAgICAgIGVtcElkOiB0aGlzLmVtcGxveWVlLmlkLFxyXG4gICAgICAgICAgICAgICAgZW1wTmFtZTogdGhpcy5lbXBsb3llZS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogdGhpcy5jYXRlZ29yeS5pZCA9PT0gMCA/IHRoaXMuY3VzdG9tVHlwZSA6IHRoaXMuY2F0ZWdvcnkubmFtZSxcclxuICAgICAgICAgICAgICAgIGFtb3VudDogdGhpcy5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICBpbnZvaWNlRGF0ZTogaW52RGF0ZS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVEYXRlOiBjdXJyZW50RGF0ZS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogdGhpcy5iYXNlNjRTdHJpbmdJbWdcclxuICAgICAgICAgICAgfSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcInN1Y2Nlc3NcIl0sIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZmxpcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvci0tLS0+JywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcImZhaWx1cmVcIl0sIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZmxpcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdub3QgVmFsaWQnKTtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcImZhaWx1cmVcIl0sIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImZsaXBcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iXX0=