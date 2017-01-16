"use strict";
var core_1 = require("@angular/core");
var http_service_1 = require("../../shared/services/http-service");
var expenses_actions_1 = require("../actions/expenses-actions");
var ExpensesMiddleware = (function () {
    function ExpensesMiddleware(http) {
        var _this = this;
        this.upload = function (state) { return function (next) { return function (action) {
            switch (action.type) {
                case expenses_actions_1.EXPENSES_ACTIONS.UPLOAD:
                    _this.http.multipart('upload', action.payload, action.payload.invoice[0])
                        .map(function (res) { return res.json(); })
                        .subscribe(function (res) {
                        debugger;
                        next({
                            type: expenses_actions_1.EXPENSES_ACTIONS.SET_EXPENSES,
                            payload: res.invoices
                        });
                    });
                    break;
                default:
                    return next(action);
            }
        }; }; };
        this.http = http;
    }
    ExpensesMiddleware = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_service_1.HTTP])
    ], ExpensesMiddleware);
    return ExpensesMiddleware;
}());
exports.ExpensesMiddleware = ExpensesMiddleware;
//# sourceMappingURL=expenses-middleware.js.map