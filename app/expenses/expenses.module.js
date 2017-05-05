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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwZW5zZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXhwZW5zZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBdUIsZUFBZSxDQUFDLENBQUE7QUFDdkMsdUJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFFN0MsbUNBQWdDLHNCQUFzQixDQUFDLENBQUE7QUFDdkQsdUNBQW1DLHVDQUF1QyxDQUFDLENBQUE7QUFDM0UseUNBQXFDLDJDQUEyQyxDQUFDLENBQUE7QUFDakYsd0NBQW9DLHlDQUF5QyxDQUFDLENBQUE7QUFDOUUscUNBQWlDLG1DQUFtQyxDQUFDLENBQUE7QUFDckUsd0NBQW9DLHlDQUF5QyxDQUFDLENBQUE7QUFDOUUsa0NBQStCLDZCQUE2QixDQUFDLENBQUE7QUFDN0Qsa0NBQStCLDZCQUE2QixDQUFDLENBQUE7QUFrQjdEO0lBQUE7SUFDQSxDQUFDO0lBakJEO1FBQUMsZUFBUSxDQUFDO1lBQ04sWUFBWSxFQUFFO2dCQUNWLHNDQUFpQjtnQkFDakIsNkNBQW9CO2dCQUNwQixpREFBc0I7Z0JBQ3RCLCtDQUFxQjtnQkFDckIseUNBQWtCO2dCQUNsQiwrQ0FBcUI7Z0JBQ3JCLG9DQUFnQjtnQkFDaEIsb0NBQWdCO2FBQ25CO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHFCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUUsQ0FBQyxzQ0FBaUIsQ0FBQztTQUMvQixDQUFDOztzQkFBQTtJQUVGLHFCQUFDO0FBQUQsQ0FBQyxBQURELElBQ0M7QUFEWSxzQkFBYyxpQkFDMUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuaW1wb3J0IHtFeHBlbnNlc0NvbXBvbmVudH0gZnJvbSBcIi4vZXhwZW5zZXMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7RXhwZW5zZVR5cGVDb21wb25lbnR9IGZyb20gXCIuL2V4cGVuc2UtdHlwZS9leHBlbnNlLXR5cGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7RXhwZW5zZUFtb3VudENvbXBvbmVudH0gZnJvbSBcIi4vZXhwZW5zZS1hbW91bnQvZXhwZW5zZS1hbW91bnQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7RXhwZW5zZURhdGVzQ29tcG9uZW50fSBmcm9tIFwiLi9leHBlbnNlLWRhdGVzL2V4cGVuc2UtZGF0ZXMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7RXhwZW5zZUlkQ29tcG9uZW50fSBmcm9tIFwiLi9leHBlbnNlLWlkL2V4cGVuc2UtaWQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7RXhwZW5zZUltYWdlQ29tcG9uZW50fSBmcm9tIFwiLi9leHBlbnNlLWltYWdlL2V4cGVuc2UtaW1hZ2UuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U3VjY2Vzc0NvbXBvbmVudH0gZnJvbSBcIi4vc3VjY2Vzcy9zdWNjZXNzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0ZhaWx1cmVDb21wb25lbnR9IGZyb20gXCIuL2ZhaWx1cmUvZmFpbHVyZS5jb21wb25lbnRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBFeHBlbnNlc0NvbXBvbmVudCxcclxuICAgICAgICBFeHBlbnNlVHlwZUNvbXBvbmVudCxcclxuICAgICAgICBFeHBlbnNlQW1vdW50Q29tcG9uZW50LFxyXG4gICAgICAgIEV4cGVuc2VEYXRlc0NvbXBvbmVudCxcclxuICAgICAgICBFeHBlbnNlSWRDb21wb25lbnQsXHJcbiAgICAgICAgRXhwZW5zZUltYWdlQ29tcG9uZW50LFxyXG4gICAgICAgIFN1Y2Nlc3NDb21wb25lbnQsXHJcbiAgICAgICAgRmFpbHVyZUNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGVcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbRXhwZW5zZXNDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFeHBlbnNlc01vZHVsZSB7XHJcbn1cclxuXHJcblxyXG4iXX0=