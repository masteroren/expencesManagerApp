import {Component} from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router";
import {HttpService} from "../shared/services/httpService";
import dialogs = require("ui/dialogs");
import {Page} from "ui/page";
require("nativescript-localstorage");


@Component({
    selector: 'app-login',
    templateUrl: 'login/login.component.html',
    styleUrls: ['login/login.component.css'],
    providers: [HttpService]
})
export class LoginComponent {
    private phoneNumber: string;
    private password: string;
    showLogin: boolean = true;
    _userName: string = '';

    constructor(private routerExtensions: RouterExtensions, private httpService: HttpService, private page: Page) {
        let user = localStorage.getItem('user');
        if (user){
            this._userName = JSON.parse(user).name;
            this.showLogin = false;
        }
    }

    set userName(value){
        this._userName = value;
    }

    get userName() {
        let user = localStorage.getItem('user');
        if (user){
            return JSON.parse(user).name;
        }
    }

    private getUserFromLocalStorage(){
        let user = localStorage.getItem('user');
        if (user){
            this._userName = JSON.parse(user).name;
            this.showLogin = false;
        }
    }

    onTap(phone, pass) {
        this.httpService.get('login', {phone: phone, password: pass})
            .subscribe(response => {
                localStorage.setItem('token', response.user.token);

                this.httpService.get('auth', {token: response.user.token})
                    .subscribe(response => {
                        localStorage.setItem('user', JSON.stringify(response));
                        this.showLogin = false;

                        this.routerExtensions.navigate(["/expenses"], {
                            transition: {
                                name: "flip"
                            }
                        });
                    });

            }, error => {
                dialogs.alert({
                    message: 'Login error'
                })
            });
    }
}