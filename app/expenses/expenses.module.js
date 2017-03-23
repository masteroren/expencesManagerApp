"use strict";
var core_1 = require('@angular/core');
var common_1 = require("@angular/common");
var expenses_component_1 = require("./expenses.component");
var expense_type_component_1 = require("./expense-type/expense-type.component");
var expense_amount_component_1 = require("./expense-amount/expense-amount.component");
var expense_dates_component_1 = require("./expense-dates/expense-dates.component");
var ExpensesModule = (function () {
    function ExpensesModule() {
    }
    ExpensesModule = __decorate([
        core_1.NgModule({
            declarations: [
                expenses_component_1.ExpensesComponent,
                expense_type_component_1.ExpenseTypeComponent,
                expense_amount_component_1.ExpenseAmountComponent,
                expense_dates_component_1.ExpenseDatesComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwZW5zZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXhwZW5zZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBdUIsZUFBZSxDQUFDLENBQUE7QUFDdkMsdUJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFFN0MsbUNBQWdDLHNCQUFzQixDQUFDLENBQUE7QUFDdkQsdUNBQW1DLHVDQUF1QyxDQUFDLENBQUE7QUFDM0UseUNBQXFDLDJDQUEyQyxDQUFDLENBQUE7QUFDakYsd0NBQW9DLHlDQUF5QyxDQUFDLENBQUE7QUFjOUU7SUFBQTtJQUNBLENBQUM7SUFiRDtRQUFDLGVBQVEsQ0FBQztZQUNOLFlBQVksRUFBRTtnQkFDVixzQ0FBaUI7Z0JBQ2pCLDZDQUFvQjtnQkFDcEIsaURBQXNCO2dCQUN0QiwrQ0FBcUI7YUFDeEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wscUJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRSxDQUFDLHNDQUFpQixDQUFDO1NBQy9CLENBQUM7O3NCQUFBO0lBRUYscUJBQUM7QUFBRCxDQUFDLEFBREQsSUFDQztBQURZLHNCQUFjLGlCQUMxQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcblxyXG5pbXBvcnQge0V4cGVuc2VzQ29tcG9uZW50fSBmcm9tIFwiLi9leHBlbnNlcy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtFeHBlbnNlVHlwZUNvbXBvbmVudH0gZnJvbSBcIi4vZXhwZW5zZS10eXBlL2V4cGVuc2UtdHlwZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtFeHBlbnNlQW1vdW50Q29tcG9uZW50fSBmcm9tIFwiLi9leHBlbnNlLWFtb3VudC9leHBlbnNlLWFtb3VudC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtFeHBlbnNlRGF0ZXNDb21wb25lbnR9IGZyb20gXCIuL2V4cGVuc2UtZGF0ZXMvZXhwZW5zZS1kYXRlcy5jb21wb25lbnRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBFeHBlbnNlc0NvbXBvbmVudCxcclxuICAgICAgICBFeHBlbnNlVHlwZUNvbXBvbmVudCxcclxuICAgICAgICBFeHBlbnNlQW1vdW50Q29tcG9uZW50LFxyXG4gICAgICAgIEV4cGVuc2VEYXRlc0NvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGVcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbRXhwZW5zZXNDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFeHBlbnNlc01vZHVsZSB7XHJcbn1cclxuIl19