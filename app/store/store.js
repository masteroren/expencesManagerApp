"use strict";
var core_1 = require("@angular/core");
var redux_1 = require("redux");
var app_reducer_1 = require("./reducers/app-reducer");
var expenses_reducer_1 = require("./reducers/expenses-reducer");
var user_middleware_1 = require("./middlewares/user-middleware");
var expenses_middleware_1 = require("./middlewares/expenses-middleware");
var Store = (function () {
    function Store(userMW, expensesMW) {
        this._store = redux_1.createStore(redux_1.combineReducers({
            user: app_reducer_1.AppReducer.reduce,
            expenses: expenses_reducer_1.ExpensesReducer.reduce
        }), redux_1.applyMiddleware(userMW.call, expensesMW.upload));
    }
    Store.prototype.getState = function () {
        return this._store.getState();
    };
    Store.prototype.dispatch = function (action) {
        // action.payload = Object.assign({}, action.payload);
        this._store.dispatch(action);
    };
    Store.prototype.subscribe = function (cb) {
        return this._store.subscribe(cb);
    };
    Store = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [user_middleware_1.UserMiddleware, expenses_middleware_1.ExpensesMiddleware])
    ], Store);
    return Store;
}());
exports.Store = Store;
//# sourceMappingURL=store.js.map