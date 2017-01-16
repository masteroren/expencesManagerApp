"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var httpService_1 = require("../shared/services/httpService");
require("nativescript-localstorage");
var LoginComponent = (function () {
    function LoginComponent(routerExtensions, httpService) {
        this.routerExtensions = routerExtensions;
        this.httpService = httpService;
        this.showLogin = true;
    }
    Object.defineProperty(LoginComponent.prototype, "userName", {
        get: function () {
            return localStorage.getItem('name');
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onTap = function (phone, pass) {
        var _this = this;
        this.httpService.get('login', { phone: phone, password: pass })
            .subscribe(function (response) {
            localStorage.setItem('token', response.user.token);
            _this.showLogin = false;
            _this.routerExtensions.navigate(["/expenses"], {
                transition: {
                    name: "flip"
                }
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
        __metadata('design:paramtypes', [router_1.RouterExtensions, httpService_1.HttpService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map