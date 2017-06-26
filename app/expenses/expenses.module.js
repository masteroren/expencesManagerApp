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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwZW5zZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXhwZW5zZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBdUIsZUFBZSxDQUFDLENBQUE7QUFDdkMsdUJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFFN0MsbUNBQWdDLHNCQUFzQixDQUFDLENBQUE7QUFDdkQsdUNBQW1DLHVDQUF1QyxDQUFDLENBQUE7QUFDM0UseUNBQXFDLDJDQUEyQyxDQUFDLENBQUE7QUFDakYsd0NBQW9DLHlDQUF5QyxDQUFDLENBQUE7QUFDOUUscUNBQWlDLG1DQUFtQyxDQUFDLENBQUE7QUFDckUsd0NBQW9DLHlDQUF5QyxDQUFDLENBQUE7QUFDOUUsa0NBQStCLDZCQUE2QixDQUFDLENBQUE7QUFDN0Qsa0NBQStCLDZCQUE2QixDQUFDLENBQUE7QUFDN0QsMENBQXFDLDRDQUE0QyxDQUFDLENBQUE7QUFtQmxGO0lBQUE7SUFDQSxDQUFDO0lBbEJEO1FBQUMsZUFBUSxDQUFDO1lBQ04sWUFBWSxFQUFFO2dCQUNWLHNDQUFpQjtnQkFDakIsNkNBQW9CO2dCQUNwQixpREFBc0I7Z0JBQ3RCLCtDQUFxQjtnQkFDckIseUNBQWtCO2dCQUNsQiwrQ0FBcUI7Z0JBQ3JCLGtEQUFzQjtnQkFDdEIsb0NBQWdCO2dCQUNoQixvQ0FBZ0I7YUFDbkI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wscUJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRSxDQUFDLHNDQUFpQixDQUFDO1NBQy9CLENBQUM7O3NCQUFBO0lBRUYscUJBQUM7QUFBRCxDQUFDLEFBREQsSUFDQztBQURZLHNCQUFjLGlCQUMxQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuXG5pbXBvcnQge0V4cGVuc2VzQ29tcG9uZW50fSBmcm9tIFwiLi9leHBlbnNlcy5jb21wb25lbnRcIjtcbmltcG9ydCB7RXhwZW5zZVR5cGVDb21wb25lbnR9IGZyb20gXCIuL2V4cGVuc2UtdHlwZS9leHBlbnNlLXR5cGUuY29tcG9uZW50XCI7XG5pbXBvcnQge0V4cGVuc2VBbW91bnRDb21wb25lbnR9IGZyb20gXCIuL2V4cGVuc2UtYW1vdW50L2V4cGVuc2UtYW1vdW50LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtFeHBlbnNlRGF0ZXNDb21wb25lbnR9IGZyb20gXCIuL2V4cGVuc2UtZGF0ZXMvZXhwZW5zZS1kYXRlcy5jb21wb25lbnRcIjtcbmltcG9ydCB7RXhwZW5zZUlkQ29tcG9uZW50fSBmcm9tIFwiLi9leHBlbnNlLWlkL2V4cGVuc2UtaWQuY29tcG9uZW50XCI7XG5pbXBvcnQge0V4cGVuc2VJbWFnZUNvbXBvbmVudH0gZnJvbSBcIi4vZXhwZW5zZS1pbWFnZS9leHBlbnNlLWltYWdlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTdWNjZXNzQ29tcG9uZW50fSBmcm9tIFwiLi9zdWNjZXNzL3N1Y2Nlc3MuY29tcG9uZW50XCI7XG5pbXBvcnQge0ZhaWx1cmVDb21wb25lbnR9IGZyb20gXCIuL2ZhaWx1cmUvZmFpbHVyZS5jb21wb25lbnRcIjtcbmltcG9ydCB7RXhwZW5zZUN1c3RvbUNvbXBvbmVudH0gZnJvbSBcIi4vZXhwZW5zZS1jdXN0b20vZXhwZW5zZS1jdXN0b21lLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBFeHBlbnNlc0NvbXBvbmVudCxcbiAgICAgICAgRXhwZW5zZVR5cGVDb21wb25lbnQsXG4gICAgICAgIEV4cGVuc2VBbW91bnRDb21wb25lbnQsXG4gICAgICAgIEV4cGVuc2VEYXRlc0NvbXBvbmVudCxcbiAgICAgICAgRXhwZW5zZUlkQ29tcG9uZW50LFxuICAgICAgICBFeHBlbnNlSW1hZ2VDb21wb25lbnQsXG4gICAgICAgIEV4cGVuc2VDdXN0b21Db21wb25lbnQsXG4gICAgICAgIFN1Y2Nlc3NDb21wb25lbnQsXG4gICAgICAgIEZhaWx1cmVDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbRXhwZW5zZXNDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEV4cGVuc2VzTW9kdWxlIHtcbn1cblxuXG4iXX0=