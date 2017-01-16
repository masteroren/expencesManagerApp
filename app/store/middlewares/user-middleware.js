"use strict";
var core_1 = require("@angular/core");
var http_service_1 = require("../../shared/services/http-service");
var user_actions_1 = require("../actions/user-actions");
var router_1 = require("@angular/router");
var app_reducer_1 = require("../reducers/app-reducer");
var UserMiddleware = (function () {
    function UserMiddleware(http, router) {
        var _this = this;
        this.call = function (state) { return function (next) { return function (action) {
            switch (action.type) {
                case user_actions_1.USER_ACTIONS.LOGIN:
                    _this.http.get(action.type, action.payload)
                        .map(function (res) { return res.json(); })
                        .do(function (data) { return localStorage.setItem('user', JSON.stringify({ token: data.user.token })); })
                        .subscribe(function (data) {
                        next({
                            type: user_actions_1.USER_ACTIONS.LOGIN_SUCCESS,
                            payload: data.user
                        });
                    });
                    break;
                case user_actions_1.USER_ACTIONS.AUTH:
                    _this.http.get('auth', action.payload)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        next({
                            type: user_actions_1.USER_ACTIONS.AUTH_RESULT,
                            payload: data
                        });
                    }, function () {
                        next({
                            type: user_actions_1.USER_ACTIONS.AUTH_RESULT
                        });
                    });
                    break;
                case user_actions_1.USER_ACTIONS.LOGOUT:
                    next({
                        type: app_reducer_1.APP_ACTIONS.RESET_STATE
                    });
                    _this.redirect();
                    break;
                default:
                    return next(action);
            }
        }; }; };
        this.http = http;
        this.router = router;
    }
    UserMiddleware.prototype.redirect = function () {
        if (this.router.url !== '/login') {
            this.router.navigate(['login']);
        }
    };
    UserMiddleware = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_service_1.HTTP, router_1.Router])
    ], UserMiddleware);
    return UserMiddleware;
}());
exports.UserMiddleware = UserMiddleware;
//# sourceMappingURL=user-middleware.js.map