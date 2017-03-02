"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var httpService_1 = require("../shared/services/httpService");
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
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
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
    LoginComponent.prototype.logOff = function () {
        localStorage.removeItem('user');
        this.showLogin = true;
    };
    LoginComponent.prototype.onTap = function (phone, password) {
        // this.httpService.login(phone.text, password.text)
        //
        //     .subscribe(response => {
        //         phone.text = '';
        //         password.text = '';
        //
        //         localStorage.setItem('token', response.token);
        //
        //         console.log(response.token);
        //
        //         this.httpService.auth(response.token)
        //             .subscribe(response => {
        //
        //                 console.log(response.user.name);
        //
        //                 localStorage.setItem('user', JSON.stringify(response.user));
        //                 this.showLogin = false;
        //
        //                 this.routerExtensions.navigate(["/expenses"], {
        //                     transition: {
        //                         name: "flip"
        //                     }
        //                 });
        //             });
        //
        //     }, error => {
        //         console.log('Login error => ', error);
        //         dialogs.alert({
        //             message: 'Login error'
        //         })
        //     });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsdUJBQStCLDZCQUE2QixDQUFDLENBQUE7QUFDN0QsNEJBQTBCLGdDQUFnQyxDQUFDLENBQUE7QUFFM0QscUJBQW1CLFNBQVMsQ0FBQyxDQUFBO0FBQzdCLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0FBU3JDO0lBSUksd0JBQW9CLGdCQUFrQyxFQUFVLFdBQXdCLEVBQVUsSUFBVTtRQUF4RixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBSDVHLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUduQixJQUFJLElBQUksR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUM7WUFDTixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUM7SUFDTCxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNyQyxDQUFDO0lBRUQsc0JBQUksb0NBQVE7YUFJWjtZQUNJLElBQUksSUFBSSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQztnQkFDTixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDakMsQ0FBQztRQUNMLENBQUM7YUFURCxVQUFhLEtBQUs7WUFDZCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQVNPLGdEQUF1QixHQUEvQjtRQUNJLElBQUksSUFBSSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQztZQUNOLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDdkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQztJQUNMLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQ0ksWUFBWSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUUxQixDQUFDO0lBRUQsOEJBQUssR0FBTCxVQUFNLEtBQUssRUFBRSxRQUFRO1FBQ2pCLG9EQUFvRDtRQUNwRCxFQUFFO1FBQ0YsK0JBQStCO1FBQy9CLDJCQUEyQjtRQUMzQiw4QkFBOEI7UUFDOUIsRUFBRTtRQUNGLHlEQUF5RDtRQUN6RCxFQUFFO1FBQ0YsdUNBQXVDO1FBQ3ZDLEVBQUU7UUFDRixnREFBZ0Q7UUFDaEQsdUNBQXVDO1FBQ3ZDLEVBQUU7UUFDRixtREFBbUQ7UUFDbkQsRUFBRTtRQUNGLCtFQUErRTtRQUMvRSwwQ0FBMEM7UUFDMUMsRUFBRTtRQUNGLGtFQUFrRTtRQUNsRSxvQ0FBb0M7UUFDcEMsdUNBQXVDO1FBQ3ZDLHdCQUF3QjtRQUN4QixzQkFBc0I7UUFDdEIsa0JBQWtCO1FBQ2xCLEVBQUU7UUFDRixvQkFBb0I7UUFDcEIsaURBQWlEO1FBQ2pELDBCQUEwQjtRQUMxQixxQ0FBcUM7UUFDckMsYUFBYTtRQUNiLFVBQVU7SUFDZCxDQUFDO0lBL0VMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7WUFDeEMsU0FBUyxFQUFFLENBQUMseUJBQVcsQ0FBQztTQUMzQixDQUFDOztzQkFBQTtJQTJFRixxQkFBQztBQUFELENBQUMsQUExRUQsSUEwRUM7QUExRVksc0JBQWMsaUJBMEUxQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge0h0dHBTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL3NlcnZpY2VzL2h0dHBTZXJ2aWNlXCI7XHJcbmltcG9ydCBkaWFsb2dzID0gcmVxdWlyZShcInVpL2RpYWxvZ3NcIik7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcclxucmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1sb2NhbHN0b3JhZ2VcIik7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1sb2dpbicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWydsb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzJ10sXHJcbiAgICBwcm92aWRlcnM6IFtIdHRwU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcclxuICAgIHNob3dMb2dpbjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBfdXNlck5hbWU6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBodHRwU2VydmljZTogSHR0cFNlcnZpY2UsIHByaXZhdGUgcGFnZTogUGFnZSkge1xyXG4gICAgICAgIGxldCB1c2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICAgICAgICBpZiAodXNlcil7XHJcbiAgICAgICAgICAgIHRoaXMuX3VzZXJOYW1lID0gSlNPTi5wYXJzZSh1c2VyKS5uYW1lO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dMb2dpbiA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCB1c2VyTmFtZSh2YWx1ZSl7XHJcbiAgICAgICAgdGhpcy5fdXNlck5hbWUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdXNlck5hbWUoKSB7XHJcbiAgICAgICAgbGV0IHVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xyXG4gICAgICAgIGlmICh1c2VyKXtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodXNlcikubmFtZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRVc2VyRnJvbUxvY2FsU3RvcmFnZSgpe1xyXG4gICAgICAgIGxldCB1c2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICAgICAgICBpZiAodXNlcil7XHJcbiAgICAgICAgICAgIHRoaXMuX3VzZXJOYW1lID0gSlNPTi5wYXJzZSh1c2VyKS5uYW1lO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dMb2dpbiA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2dPZmYoKXtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xyXG4gICAgICAgIHRoaXMuc2hvd0xvZ2luID0gdHJ1ZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25UYXAocGhvbmUsIHBhc3N3b3JkKSB7XHJcbiAgICAgICAgLy8gdGhpcy5odHRwU2VydmljZS5sb2dpbihwaG9uZS50ZXh0LCBwYXNzd29yZC50ZXh0KVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgcGhvbmUudGV4dCA9ICcnO1xyXG4gICAgICAgIC8vICAgICAgICAgcGFzc3dvcmQudGV4dCA9ICcnO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCByZXNwb25zZS50b2tlbik7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnRva2VuKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5odHRwU2VydmljZS5hdXRoKHJlc3BvbnNlLnRva2VuKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnVzZXIubmFtZSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeShyZXNwb25zZS51c2VyKSk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xvZ2luID0gZmFsc2U7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9leHBlbnNlc1wiXSwge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZmxpcFwiXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdMb2dpbiBlcnJvciA9PiAnLCBlcnJvcik7XHJcbiAgICAgICAgLy8gICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBtZXNzYWdlOiAnTG9naW4gZXJyb3InXHJcbiAgICAgICAgLy8gICAgICAgICB9KVxyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==