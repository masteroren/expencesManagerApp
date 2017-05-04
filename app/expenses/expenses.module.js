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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwZW5zZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXhwZW5zZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBdUIsZUFBZSxDQUFDLENBQUE7QUFDdkMsdUJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFFN0MsbUNBQWdDLHNCQUFzQixDQUFDLENBQUE7QUFDdkQsdUNBQW1DLHVDQUF1QyxDQUFDLENBQUE7QUFDM0UseUNBQXFDLDJDQUEyQyxDQUFDLENBQUE7QUFDakYsd0NBQW9DLHlDQUF5QyxDQUFDLENBQUE7QUFDOUUscUNBQWlDLG1DQUFtQyxDQUFDLENBQUE7QUFDckUsd0NBQW9DLHlDQUF5QyxDQUFDLENBQUE7QUFDOUUsa0NBQStCLDZCQUE2QixDQUFDLENBQUE7QUFDN0Qsa0NBQStCLDZCQUE2QixDQUFDLENBQUE7QUFrQjdEO0lBQUE7SUFDQSxDQUFDO0lBakJEO1FBQUMsZUFBUSxDQUFDO1lBQ04sWUFBWSxFQUFFO2dCQUNWLHNDQUFpQjtnQkFDakIsNkNBQW9CO2dCQUNwQixpREFBc0I7Z0JBQ3RCLCtDQUFxQjtnQkFDckIseUNBQWtCO2dCQUNsQiwrQ0FBcUI7Z0JBQ3JCLG9DQUFnQjtnQkFDaEIsb0NBQWdCO2FBQ25CO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHFCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUUsQ0FBQyxzQ0FBaUIsQ0FBQztTQUMvQixDQUFDOztzQkFBQTtJQUVGLHFCQUFDO0FBQUQsQ0FBQyxBQURELElBQ0M7QUFEWSxzQkFBYyxpQkFDMUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcblxuaW1wb3J0IHtFeHBlbnNlc0NvbXBvbmVudH0gZnJvbSBcIi4vZXhwZW5zZXMuY29tcG9uZW50XCI7XG5pbXBvcnQge0V4cGVuc2VUeXBlQ29tcG9uZW50fSBmcm9tIFwiLi9leHBlbnNlLXR5cGUvZXhwZW5zZS10eXBlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtFeHBlbnNlQW1vdW50Q29tcG9uZW50fSBmcm9tIFwiLi9leHBlbnNlLWFtb3VudC9leHBlbnNlLWFtb3VudC5jb21wb25lbnRcIjtcbmltcG9ydCB7RXhwZW5zZURhdGVzQ29tcG9uZW50fSBmcm9tIFwiLi9leHBlbnNlLWRhdGVzL2V4cGVuc2UtZGF0ZXMuY29tcG9uZW50XCI7XG5pbXBvcnQge0V4cGVuc2VJZENvbXBvbmVudH0gZnJvbSBcIi4vZXhwZW5zZS1pZC9leHBlbnNlLWlkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtFeHBlbnNlSW1hZ2VDb21wb25lbnR9IGZyb20gXCIuL2V4cGVuc2UtaW1hZ2UvZXhwZW5zZS1pbWFnZS5jb21wb25lbnRcIjtcbmltcG9ydCB7U3VjY2Vzc0NvbXBvbmVudH0gZnJvbSBcIi4vc3VjY2Vzcy9zdWNjZXNzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtGYWlsdXJlQ29tcG9uZW50fSBmcm9tIFwiLi9mYWlsdXJlL2ZhaWx1cmUuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEV4cGVuc2VzQ29tcG9uZW50LFxuICAgICAgICBFeHBlbnNlVHlwZUNvbXBvbmVudCxcbiAgICAgICAgRXhwZW5zZUFtb3VudENvbXBvbmVudCxcbiAgICAgICAgRXhwZW5zZURhdGVzQ29tcG9uZW50LFxuICAgICAgICBFeHBlbnNlSWRDb21wb25lbnQsXG4gICAgICAgIEV4cGVuc2VJbWFnZUNvbXBvbmVudCxcbiAgICAgICAgU3VjY2Vzc0NvbXBvbmVudCxcbiAgICAgICAgRmFpbHVyZUNvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtFeHBlbnNlc0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgRXhwZW5zZXNNb2R1bGUge1xufVxuXG5cbiJdfQ==