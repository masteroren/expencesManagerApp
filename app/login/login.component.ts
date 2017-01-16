import {Component} from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router";
import {HttpService} from "../shared/services/httpService";
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

    constructor(private routerExtensions: RouterExtensions, private httpService: HttpService) {
    }

    get userName(){
        return localStorage.getItem('name');
    }

    onTap(phone, pass) {
        this.httpService.get('login', {phone: phone, password: pass})
            .subscribe(response => {
                localStorage.setItem('token', response.user.token);
                this.showLogin = false;
                this.routerExtensions.navigate(["/expenses"], {
                    transition: {
                        name: "flip"
                    }
                });
            });
    }
}