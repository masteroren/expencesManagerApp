"use strict";
var core_1 = require('@angular/core');
var common_1 = require("@angular/common");
var router_1 = require("nativescript-angular/router");
var forms_1 = require("nativescript-angular/forms");
var login_component_1 = require('./login.component');
var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        core_1.NgModule({
            declarations: [login_component_1.LoginComponent],
            imports: [
                common_1.CommonModule,
                router_1.NativeScriptRouterModule,
                forms_1.NativeScriptFormsModule
            ],
            exports: [login_component_1.LoginComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginModule);
    return LoginModule;
}());
exports.LoginModule = LoginModule;
//# sourceMappingURL=login.module.js.map