"use strict";
var core_1 = require("@angular/core");
var expenses_actions_1 = require("../actions/expenses-actions");
var initState = {
    expenses: [],
};
var ExpensesReducer = (function () {
    function ExpensesReducer() {
    }
    ExpensesReducer.reduce = function (state, action) {
        if (state === void 0) { state = initState.expenses; }
        switch (action.type) {
            case expenses_actions_1.EXPENSES_ACTIONS.SET_EXPENSES:
            // return Object.assign([], state, action.payload);
            default:
                return state;
        }
    };
    ExpensesReducer = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ExpensesReducer);
    return ExpensesReducer;
}());
exports.ExpensesReducer = ExpensesReducer;
//# sourceMappingURL=expenses-reducer.js.map