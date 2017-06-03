"use strict";
var core_1 = require('@angular/core');
var common_1 = require("@angular/common");
var expenses_component_1 = require("./expenses.component");
var expense_type_component_1 = require("./expense-type/expense-type.component");
var expense_amount_component_1 = require("./expense-amount/expense-amount.component");
var expense_dates_component_1 = require("./expense-dates/expense-dates.component");
var expense_id_component_1 = require("./expense-id/expense-id.component");
var expense_image_component_1 = require("./expense-image/expense-image.component");
var success_component_1 = require("./success/success.component");
var failure_component_1 = require("./failure/failure.component");
var expense_custome_component_1 = require("./expense-custom/expense-custome.component");
var ExpensesModule = (function () {
    function ExpensesModule() {
    }
    ExpensesModule = __decorate([
        core_1.NgModule({
            declarations: [
                expenses_component_1.ExpensesComponent,
                expense_type_component_1.ExpenseTypeComponent,
                expense_amount_component_1.ExpenseAmountComponent,
                expense_dates_component_1.ExpenseDatesComponent,
                expense_id_component_1.ExpenseIdComponent,
                expense_image_component_1.ExpenseImageComponent,
                expense_custome_component_1.ExpenseCustomComponent,
                success_component_1.SuccessComponent,
                failure_component_1.FailureComponent
            ],
            imports: [
                common_1.CommonModule
            ],
            exports: [expenses_component_1.ExpensesComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ExpensesModule);
    return ExpensesModule;
}());
exports.ExpensesModule = ExpensesModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwZW5zZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXhwZW5zZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBdUIsZUFBZSxDQUFDLENBQUE7QUFDdkMsdUJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFFN0MsbUNBQWdDLHNCQUFzQixDQUFDLENBQUE7QUFDdkQsdUNBQW1DLHVDQUF1QyxDQUFDLENBQUE7QUFDM0UseUNBQXFDLDJDQUEyQyxDQUFDLENBQUE7QUFDakYsd0NBQW9DLHlDQUF5QyxDQUFDLENBQUE7QUFDOUUscUNBQWlDLG1DQUFtQyxDQUFDLENBQUE7QUFDckUsd0NBQW9DLHlDQUF5QyxDQUFDLENBQUE7QUFDOUUsa0NBQStCLDZCQUE2QixDQUFDLENBQUE7QUFDN0Qsa0NBQStCLDZCQUE2QixDQUFDLENBQUE7QUFDN0QsMENBQXFDLDRDQUE0QyxDQUFDLENBQUE7QUFtQmxGO0lBQUE7SUFDQSxDQUFDO0lBbEJEO1FBQUMsZUFBUSxDQUFDO1lBQ04sWUFBWSxFQUFFO2dCQUNWLHNDQUFpQjtnQkFDakIsNkNBQW9CO2dCQUNwQixpREFBc0I7Z0JBQ3RCLCtDQUFxQjtnQkFDckIseUNBQWtCO2dCQUNsQiwrQ0FBcUI7Z0JBQ3JCLGtEQUFzQjtnQkFDdEIsb0NBQWdCO2dCQUNoQixvQ0FBZ0I7YUFDbkI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wscUJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRSxDQUFDLHNDQUFpQixDQUFDO1NBQy9CLENBQUM7O3NCQUFBO0lBRUYscUJBQUM7QUFBRCxDQUFDLEFBREQsSUFDQztBQURZLHNCQUFjLGlCQUMxQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcblxyXG5pbXBvcnQge0V4cGVuc2VzQ29tcG9uZW50fSBmcm9tIFwiLi9leHBlbnNlcy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtFeHBlbnNlVHlwZUNvbXBvbmVudH0gZnJvbSBcIi4vZXhwZW5zZS10eXBlL2V4cGVuc2UtdHlwZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtFeHBlbnNlQW1vdW50Q29tcG9uZW50fSBmcm9tIFwiLi9leHBlbnNlLWFtb3VudC9leHBlbnNlLWFtb3VudC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtFeHBlbnNlRGF0ZXNDb21wb25lbnR9IGZyb20gXCIuL2V4cGVuc2UtZGF0ZXMvZXhwZW5zZS1kYXRlcy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtFeHBlbnNlSWRDb21wb25lbnR9IGZyb20gXCIuL2V4cGVuc2UtaWQvZXhwZW5zZS1pZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtFeHBlbnNlSW1hZ2VDb21wb25lbnR9IGZyb20gXCIuL2V4cGVuc2UtaW1hZ2UvZXhwZW5zZS1pbWFnZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtTdWNjZXNzQ29tcG9uZW50fSBmcm9tIFwiLi9zdWNjZXNzL3N1Y2Nlc3MuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7RmFpbHVyZUNvbXBvbmVudH0gZnJvbSBcIi4vZmFpbHVyZS9mYWlsdXJlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0V4cGVuc2VDdXN0b21Db21wb25lbnR9IGZyb20gXCIuL2V4cGVuc2UtY3VzdG9tL2V4cGVuc2UtY3VzdG9tZS5jb21wb25lbnRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBFeHBlbnNlc0NvbXBvbmVudCxcclxuICAgICAgICBFeHBlbnNlVHlwZUNvbXBvbmVudCxcclxuICAgICAgICBFeHBlbnNlQW1vdW50Q29tcG9uZW50LFxyXG4gICAgICAgIEV4cGVuc2VEYXRlc0NvbXBvbmVudCxcclxuICAgICAgICBFeHBlbnNlSWRDb21wb25lbnQsXHJcbiAgICAgICAgRXhwZW5zZUltYWdlQ29tcG9uZW50LFxyXG4gICAgICAgIEV4cGVuc2VDdXN0b21Db21wb25lbnQsXHJcbiAgICAgICAgU3VjY2Vzc0NvbXBvbmVudCxcclxuICAgICAgICBGYWlsdXJlQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtFeHBlbnNlc0NvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEV4cGVuc2VzTW9kdWxlIHtcclxufVxyXG5cclxuXHJcbiJdfQ==