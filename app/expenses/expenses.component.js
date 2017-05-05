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
                console.log(error);
                _this.routerExtensions.navigate(["failure"], {
                    transition: {
                        name: "flip"
                    }
                });
            });
        }
        else {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwZW5zZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXhwZW5zZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQscUJBQW1CLFNBQVMsQ0FBQyxDQUFBO0FBQzdCLDRCQUEwQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQzNELElBQU8sWUFBWSxXQUFXLFFBQVEsQ0FBQyxDQUFDO0FBRXhDLHFCQUFxQjtBQUNyQixxQ0FBK0Isc0JBQXNCLENBQUMsQ0FBQTtBQUl0RCxPQUFPLENBQUMsMkJBQTJCLENBQUMsQ0FBQztBQUNyQyxzQkFBZ0MsYUFBYSxDQUFDLENBQUE7QUFROUM7SUFTSSwyQkFBb0IsSUFBVSxFQUFVLFdBQXdCLEVBQVUsZ0JBQWtDO1FBQXhGLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFONUcsWUFBTyxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7UUFHM0Isb0JBQWUsR0FBVyxFQUFFLENBQUM7UUFDN0IsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFHdEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDaEMsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDSSxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLENBQUM7SUFDTCxDQUFDO0lBRUQsa0NBQU0sR0FBTjtRQUNJLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLEVB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QUFpQyxDQUFDO1lBQzlDLFNBQVMsRUFBRSxDQUFDLHlCQUFXLENBQUM7U0FDM0IsQ0FBQzs7eUJBQUE7SUEwRkYsd0JBQUM7QUFBRCxDQUFDLEFBekZELElBeUZDO0FBekZZLHlCQUFpQixvQkF5RjdCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHtIdHRwU2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC9zZXJ2aWNlcy9odHRwU2VydmljZVwiO1xuaW1wb3J0IGNhbWVyYU1vZHVsZSA9IHJlcXVpcmUoXCJjYW1lcmFcIik7XG5cbi8vIE5hdGl2ZSBTY3JpcHQgY29yZVxuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7SUVtcGxveWVlfSBmcm9tIFwiLi4vc2hhcmVkL2ludGVyZmFjZXMvSUVtcGxveWVlXCI7XG5pbXBvcnQge0lDYXRlZ29yeX0gZnJvbSBcIi4uL3NoYXJlZC9pbnRlcmZhY2VzL0lDYXRlZ29yeVwiO1xuXG5yZXF1aXJlKFwibmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZVwiKTtcbmltcG9ydCB7aXNOdWxsT3JVbmRlZmluZWR9IGZyb20gXCJ1dGlscy90eXBlc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1leHBlbnNlcycsXG4gICAgdGVtcGxhdGVVcmw6IFwiZXhwZW5zZXMvZXhwZW5zZXMuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnZXhwZW5zZXMvZXhwZW5zZXMuY29tcG9uZW50LmNzcyddLFxuICAgIHByb3ZpZGVyczogW0h0dHBTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBFeHBlbnNlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgZW1wbG95ZWU6IElFbXBsb3llZTtcbiAgICBjYXRlZ29yeTogSUNhdGVnb3J5O1xuICAgIG1pbkRhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGFtb3VudDogbnVtYmVyO1xuICAgIGludm9pY2VEYXRlOiBEYXRlO1xuICAgIGJhc2U2NFN0cmluZ0ltZzogc3RyaW5nID0gJyc7XG4gICAgcmVjaXBlTnVtYmVyOiBzdHJpbmcgPSAnJztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSBodHRwU2VydmljZTogSHR0cFNlcnZpY2UsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xuICAgICAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW1wbG95ZWUnKSkge1xuICAgICAgICAgICAgdGhpcy5lbXBsb3llZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VtcGxveWVlJykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9nb3V0KCl7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wid2VsY29tZVwiXSwge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiZmxpcFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldEFtb3VudChhbW91bnQpIHtcbiAgICAgICAgdGhpcy5hbW91bnQgPSBhbW91bnQ7XG4gICAgfVxuXG4gICAgc2V0Q2F0ZWdvcnkoY2F0ZWdvcnk6IElDYXRlZ29yeSkge1xuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gY2F0ZWdvcnk7XG4gICAgfVxuXG4gICAgc2V0RGF0ZShkYXRlKSB7XG4gICAgICAgIHRoaXMuaW52b2ljZURhdGUgPSBkYXRlO1xuICAgIH1cblxuICAgIHNldEltYWdlKGltZ1N0cmluZzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuYmFzZTY0U3RyaW5nSW1nID0gaW1nU3RyaW5nO1xuICAgIH1cblxuICAgIHNldFJlY2lwZU51bWJlcihyZWNpcGVOdW1iZXI6IHN0cmluZyl7XG4gICAgICAgIHRoaXMucmVjaXBlTnVtYmVyID0gcmVjaXBlTnVtYmVyO1xuICAgIH1cblxuICAgIHNlbmRJbnZvaWNlKCkge1xuICAgICAgICBsZXQgaW52RGF0ZSA9IHRoaXMuaW52b2ljZURhdGUgPyB0aGlzLmludm9pY2VEYXRlIDogdGhpcy5taW5EYXRlO1xuICAgICAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgY2FtZXJhQXZhaWxhYmxlOiBCb29sZWFuID0gY2FtZXJhTW9kdWxlLmlzQXZhaWxhYmxlKCk7XG5cbiAgICAgICAgbGV0IHZhbGlkID0gIWlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuY2F0ZWdvcnkpICYmICFpc051bGxPclVuZGVmaW5lZCh0aGlzLmFtb3VudCk7XG4gICAgICAgIGlmIChjYW1lcmFBdmFpbGFibGUpe1xuICAgICAgICAgICAgdmFsaWQgPSB2YWxpZCAmJiAhaXNOdWxsT3JVbmRlZmluZWQodGhpcy5iYXNlNjRTdHJpbmdJbWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbGlkKXtcbiAgICAgICAgICAgIHRoaXMuaHR0cFNlcnZpY2UudXBsb2FkKHtcbiAgICAgICAgICAgICAgICBlbXBOYW1lOiB0aGlzLmVtcGxveWVlLm5hbWUsXG4gICAgICAgICAgICAgICAgdHlwZTogdGhpcy5jYXRlZ29yeS5uYW1lLFxuICAgICAgICAgICAgICAgIGFtb3VudDogdGhpcy5hbW91bnQsXG4gICAgICAgICAgICAgICAgaW52b2ljZURhdGU6IGludkRhdGUuZ2V0VGltZSgpLFxuICAgICAgICAgICAgICAgIGNyZWF0ZURhdGU6IGN1cnJlbnREYXRlLmdldFRpbWUoKSxcbiAgICAgICAgICAgICAgICBpbWFnZTogdGhpcy5iYXNlNjRTdHJpbmdJbWcsXG4gICAgICAgICAgICAgICAgcmVjaXBlTnVtYmVyOiB0aGlzLnJlY2lwZU51bWJlclxuICAgICAgICAgICAgfSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJzdWNjZXNzXCJdLCB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZmxpcFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcImZhaWx1cmVcIl0sIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJmbGlwXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiZmFpbHVyZVwiXSwge1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJmbGlwXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4iXX0=