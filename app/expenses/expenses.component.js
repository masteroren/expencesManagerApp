"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var httpService_1 = require("../shared/services/httpService");
var cameraModule = require("nativescript-camera");
// Native Script core
var nativescript_angular_1 = require("nativescript-angular");
require("nativescript-localstorage");
var types_1 = require("utils/types");
var ExpensesComponent = (function () {
    function ExpensesComponent(httpService, routerExtensions) {
        this.httpService = httpService;
        this.routerExtensions = routerExtensions;
        this.minDate = new Date();
        this.base64StringImg = '';
        this.recipeNumber = '';
    }
    ExpensesComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('employee')) {
            this.employee = JSON.parse(localStorage.getItem('employee'));
        }
    };
    ExpensesComponent.prototype.logout = function () {
        localStorage.clear();
        this.routerExtensions.navigate(["users"]);
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
            }).subscribe(function (_) {
                _this.routerExtensions.navigate(["success"]);
            }, function (error) {
                console.log('error---->', error);
                _this.routerExtensions.navigate(["failure"]);
            });
        }
        else {
            console.log('not Valid');
            this.routerExtensions.navigate(["failure"]);
        }
    };
    return ExpensesComponent;
}());
ExpensesComponent = __decorate([
    core_1.Component({
        selector: 'app-expenses',
        templateUrl: "expenses/expenses.component.html",
        styleUrls: ['expenses/expenses.component.css'],
        providers: [httpService_1.HttpService]
    }),
    __metadata("design:paramtypes", [httpService_1.HttpService, nativescript_angular_1.RouterExtensions])
], ExpensesComponent);
exports.ExpensesComponent = ExpensesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwZW5zZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXhwZW5zZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWdEO0FBQ2hELDhEQUEyRDtBQUMzRCxrREFBcUQ7QUFFckQscUJBQXFCO0FBQ3JCLDZEQUFzRDtBQUl0RCxPQUFPLENBQUMsMkJBQTJCLENBQUMsQ0FBQztBQUNyQyxxQ0FBOEM7QUFROUMsSUFBYSxpQkFBaUI7SUFVMUIsMkJBQW9CLFdBQXdCLEVBQVUsZ0JBQWtDO1FBQXBFLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQVBoRixZQUFPLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUkzQixvQkFBZSxHQUFXLEVBQUUsQ0FBQztRQUM3QixpQkFBWSxHQUFXLEVBQUUsQ0FBQztJQUdsQyxDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNJLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDakUsQ0FBQztJQUNMLENBQUM7SUFFTyxrQ0FBTSxHQUFkO1FBQ0ksWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFTyx5Q0FBYSxHQUFyQixVQUFzQixLQUFhO1FBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFFTyxxQ0FBUyxHQUFqQixVQUFrQixNQUFNO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFFTyx1Q0FBVyxHQUFuQixVQUFvQixRQUFtQjtRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBRU8sbUNBQU8sR0FBZixVQUFnQixJQUFZO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVPLG9DQUFRLEdBQWhCLFVBQWlCLFNBQWlCO1FBQzlCLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO0lBQ3JDLENBQUM7SUFFTywyQ0FBZSxHQUF2QixVQUF3QixZQUFvQjtRQUN4QyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztJQUNyQyxDQUFDO0lBRU8sdUNBQVcsR0FBbkI7UUFBQSxpQkE2QkM7UUE1QkcsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDakUsSUFBSSxXQUFXLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUM3QixJQUFJLGVBQWUsR0FBWSxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFMUQsSUFBSSxLQUFLLEdBQUcsQ0FBQyx5QkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyx5QkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakYsRUFBRSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztZQUNsQixLQUFLLEdBQUcsS0FBSyxJQUFJLENBQUMseUJBQWlCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzlELENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7Z0JBQ3BCLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ3ZCLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUk7Z0JBQzNCLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUk7Z0JBQ25FLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbkIsV0FBVyxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUU7Z0JBQzlCLFVBQVUsRUFBRSxXQUFXLENBQUMsT0FBTyxFQUFFO2dCQUNqQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGVBQWU7YUFDOUIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUM7Z0JBQ1YsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDaEQsQ0FBQyxFQUFFLFVBQUEsS0FBSztnQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDakMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDaEQsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ2hELENBQUM7SUFDTCxDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDLEFBOUVELElBOEVDO0FBOUVZLGlCQUFpQjtJQU43QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGNBQWM7UUFDeEIsV0FBVyxFQUFFLGtDQUFrQztRQUMvQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztRQUM5QyxTQUFTLEVBQUUsQ0FBQyx5QkFBVyxDQUFDO0tBQzNCLENBQUM7cUNBV21DLHlCQUFXLEVBQTRCLHVDQUFnQjtHQVYvRSxpQkFBaUIsQ0E4RTdCO0FBOUVZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7SHR0cFNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvc2VydmljZXMvaHR0cFNlcnZpY2VcIjtcclxuaW1wb3J0IGNhbWVyYU1vZHVsZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY2FtZXJhXCIpO1xyXG5cclxuLy8gTmF0aXZlIFNjcmlwdCBjb3JlXHJcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XHJcbmltcG9ydCB7SUVtcGxveWVlfSBmcm9tIFwiLi4vc2hhcmVkL2ludGVyZmFjZXMvSUVtcGxveWVlXCI7XHJcbmltcG9ydCB7SUNhdGVnb3J5fSBmcm9tIFwiLi4vc2hhcmVkL2ludGVyZmFjZXMvSUNhdGVnb3J5XCI7XHJcblxyXG5yZXF1aXJlKFwibmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZVwiKTtcclxuaW1wb3J0IHtpc051bGxPclVuZGVmaW5lZH0gZnJvbSBcInV0aWxzL3R5cGVzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLWV4cGVuc2VzJyxcclxuICAgIHRlbXBsYXRlVXJsOiBcImV4cGVuc2VzL2V4cGVuc2VzLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFsnZXhwZW5zZXMvZXhwZW5zZXMuY29tcG9uZW50LmNzcyddLFxyXG4gICAgcHJvdmlkZXJzOiBbSHR0cFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFeHBlbnNlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwcml2YXRlIGVtcGxveWVlOiBJRW1wbG95ZWU7XHJcbiAgICBwcml2YXRlIGNhdGVnb3J5OiBJQ2F0ZWdvcnk7XHJcbiAgICBwcml2YXRlIG1pbkRhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgcHJpdmF0ZSBhbW91bnQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgY3VzdG9tVHlwZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBpbnZvaWNlRGF0ZTogRGF0ZTtcclxuICAgIHByaXZhdGUgYmFzZTY0U3RyaW5nSW1nOiBzdHJpbmcgPSAnJztcclxuICAgIHByaXZhdGUgcmVjaXBlTnVtYmVyOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHBTZXJ2aWNlOiBIdHRwU2VydmljZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbXBsb3llZScpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1wbG95ZWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbXBsb3llZScpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2dvdXQoKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcInVzZXJzXCJdKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEN1c3RvbVR5cGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuY3VzdG9tVHlwZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0QW1vdW50KGFtb3VudCkge1xyXG4gICAgICAgIHRoaXMuYW1vdW50ID0gYW1vdW50O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0Q2F0ZWdvcnkoY2F0ZWdvcnk6IElDYXRlZ29yeSkge1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldERhdGUoZGF0ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5pbnZvaWNlRGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0SW1hZ2UoaW1nU3RyaW5nOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmJhc2U2NFN0cmluZ0ltZyA9IGltZ1N0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFJlY2lwZU51bWJlcihyZWNpcGVOdW1iZXI6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMucmVjaXBlTnVtYmVyID0gcmVjaXBlTnVtYmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2VuZEludm9pY2UoKSB7XHJcbiAgICAgICAgbGV0IGludkRhdGUgPSB0aGlzLmludm9pY2VEYXRlID8gdGhpcy5pbnZvaWNlRGF0ZSA6IHRoaXMubWluRGF0ZTtcclxuICAgICAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGxldCBjYW1lcmFBdmFpbGFibGU6IEJvb2xlYW4gPSBjYW1lcmFNb2R1bGUuaXNBdmFpbGFibGUoKTtcclxuXHJcbiAgICAgICAgbGV0IHZhbGlkID0gIWlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuY2F0ZWdvcnkpICYmICFpc051bGxPclVuZGVmaW5lZCh0aGlzLmFtb3VudCk7XHJcbiAgICAgICAgaWYgKGNhbWVyYUF2YWlsYWJsZSkge1xyXG4gICAgICAgICAgICB2YWxpZCA9IHZhbGlkICYmICFpc051bGxPclVuZGVmaW5lZCh0aGlzLmJhc2U2NFN0cmluZ0ltZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodmFsaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5odHRwU2VydmljZS51cGxvYWQoe1xyXG4gICAgICAgICAgICAgICAgZW1wSWQ6IHRoaXMuZW1wbG95ZWUuaWQsXHJcbiAgICAgICAgICAgICAgICBlbXBOYW1lOiB0aGlzLmVtcGxveWVlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiB0aGlzLmNhdGVnb3J5LmlkID09PSAwID8gdGhpcy5jdXN0b21UeXBlIDogdGhpcy5jYXRlZ29yeS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiB0aGlzLmFtb3VudCxcclxuICAgICAgICAgICAgICAgIGludm9pY2VEYXRlOiBpbnZEYXRlLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZURhdGU6IGN1cnJlbnREYXRlLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgICAgIGltYWdlOiB0aGlzLmJhc2U2NFN0cmluZ0ltZ1xyXG4gICAgICAgICAgICB9KS5zdWJzY3JpYmUoXyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wic3VjY2Vzc1wiXSk7XHJcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvci0tLS0+JywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcImZhaWx1cmVcIl0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdub3QgVmFsaWQnKTtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcImZhaWx1cmVcIl0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdfQ==