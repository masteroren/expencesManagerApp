"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var httpService_1 = require("../shared/services/httpService");
var dialogs = require("ui/dialogs");
var page_1 = require("ui/page");
require("nativescript-localstorage");
var LoginComponent = (function () {
    function LoginComponent(routerExtensions, httpService, page) {
        this.routerExtensions = routerExtensions;
        this.httpService = httpService;
        this.page = page;
        this.showLogin = true;
        this._userName = '';
        var user = localStorage.getItem('user');
        if (user) {
            this._userName = JSON.parse(user).name;
            this.showLogin = false;
        }
    }
    Object.defineProperty(LoginComponent.prototype, "userName", {
        get: function () {
            var user = localStorage.getItem('user');
            if (user) {
                return JSON.parse(user).name;
            }
        },
        set: function (value) {
            this._userName = value;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.getUserFromLocalStorage = function () {
        var user = localStorage.getItem('user');
        if (user) {
            this._userName = JSON.parse(user).name;
            this.showLogin = false;
        }
    };
    LoginComponent.prototype.onTap = function (phone, pass) {
        var _this = this;
        this.httpService.get('login', { phone: phone, password: pass })
            .subscribe(function (response) {
            localStorage.setItem('token', response.user.token);
            _this.httpService.get('auth', { token: response.user.token })
                .subscribe(function (response) {
                localStorage.setItem('user', JSON.stringify(response));
                _this.showLogin = false;
                _this.routerExtensions.navigate(["/expenses"], {
                    transition: {
                        name: "flip"
                    }
                });
            });
        }, function (error) {
            dialogs.alert({
                message: 'Login error'
            });
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: 'login/login.component.html',
            styleUrls: ['login/login.component.css'],
            providers: [httpService_1.HttpService]
        }), 
        __metadata('design:paramtypes', [router_1.RouterExtensions, httpService_1.HttpService, page_1.Page])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map