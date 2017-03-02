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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBdUIsZUFBZSxDQUFDLENBQUE7QUFDdkMsdUJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0MsdUJBQXVDLDZCQUE2QixDQUFDLENBQUE7QUFDckUsc0JBQXNDLDRCQUE0QixDQUFDLENBQUE7QUFDbkUsZ0NBQTZCLG1CQUFtQixDQUFDLENBQUE7QUFXakQ7SUFBQTtJQUNBLENBQUM7SUFWRDtRQUFDLGVBQVEsQ0FBQztZQUNOLFlBQVksRUFBRSxDQUFDLGdDQUFjLENBQUM7WUFDOUIsT0FBTyxFQUFFO2dCQUNMLHFCQUFZO2dCQUNaLGlDQUF3QjtnQkFDeEIsK0JBQXVCO2FBQzFCO1lBQ0QsT0FBTyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztTQUM1QixDQUFDOzttQkFBQTtJQUVGLGtCQUFDO0FBQUQsQ0FBQyxBQURELElBQ0M7QUFEWSxtQkFBVyxjQUN2QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7TmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7TmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSBmcm9tICcuL2xvZ2luLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbTG9naW5Db21wb25lbnRdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGVcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbTG9naW5Db21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbk1vZHVsZSB7XHJcbn1cclxuIl19