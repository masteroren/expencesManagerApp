"use strict";
var core_1 = require('@angular/core');
var common_1 = require("@angular/common");
var expenses_component_1 = require("./expenses.component");
var expense_type_component_1 = require("./expense-type/expense-type.component");
var expense_amount_component_1 = require("./expense-amount/expense-amount.component");
var expense_dates_component_1 = require("./expense-dates/expense-dates.component");
var finish_step_component_1 = require("./finish/finish-step.component");
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
                finish_step_component_1.FinishComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwZW5zZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXhwZW5zZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBdUIsZUFBZSxDQUFDLENBQUE7QUFDdkMsdUJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFFN0MsbUNBQWdDLHNCQUFzQixDQUFDLENBQUE7QUFDdkQsdUNBQW1DLHVDQUF1QyxDQUFDLENBQUE7QUFDM0UseUNBQXFDLDJDQUEyQyxDQUFDLENBQUE7QUFDakYsd0NBQW9DLHlDQUF5QyxDQUFDLENBQUE7QUFDOUUsc0NBQThCLGdDQUFnQyxDQUFDLENBQUE7QUFlL0Q7SUFBQTtJQUNBLENBQUM7SUFkRDtRQUFDLGVBQVEsQ0FBQztZQUNOLFlBQVksRUFBRTtnQkFDVixzQ0FBaUI7Z0JBQ2pCLDZDQUFvQjtnQkFDcEIsaURBQXNCO2dCQUN0QiwrQ0FBcUI7Z0JBQ3JCLHVDQUFlO2FBQ2xCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHFCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUUsQ0FBQyxzQ0FBaUIsQ0FBQztTQUMvQixDQUFDOztzQkFBQTtJQUVGLHFCQUFDO0FBQUQsQ0FBQyxBQURELElBQ0M7QUFEWSxzQkFBYyxpQkFDMUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuaW1wb3J0IHtFeHBlbnNlc0NvbXBvbmVudH0gZnJvbSBcIi4vZXhwZW5zZXMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7RXhwZW5zZVR5cGVDb21wb25lbnR9IGZyb20gXCIuL2V4cGVuc2UtdHlwZS9leHBlbnNlLXR5cGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7RXhwZW5zZUFtb3VudENvbXBvbmVudH0gZnJvbSBcIi4vZXhwZW5zZS1hbW91bnQvZXhwZW5zZS1hbW91bnQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7RXhwZW5zZURhdGVzQ29tcG9uZW50fSBmcm9tIFwiLi9leHBlbnNlLWRhdGVzL2V4cGVuc2UtZGF0ZXMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7RmluaXNoQ29tcG9uZW50fSBmcm9tIFwiLi9maW5pc2gvZmluaXNoLXN0ZXAuY29tcG9uZW50XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgRXhwZW5zZXNDb21wb25lbnQsXHJcbiAgICAgICAgRXhwZW5zZVR5cGVDb21wb25lbnQsXHJcbiAgICAgICAgRXhwZW5zZUFtb3VudENvbXBvbmVudCxcclxuICAgICAgICBFeHBlbnNlRGF0ZXNDb21wb25lbnQsXHJcbiAgICAgICAgRmluaXNoQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtFeHBlbnNlc0NvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEV4cGVuc2VzTW9kdWxlIHtcclxufVxyXG4iXX0=