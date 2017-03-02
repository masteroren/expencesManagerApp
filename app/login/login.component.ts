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
    showLogin: boolean = true;
    _userName: string = '';

    constructor(private routerExtensions: RouterExtensions, private httpService: HttpService, private page: Page) {
        let user = localStorage.getItem('user');
        if (user){
            this._userName = JSON.parse(user).name;
            this.showLogin = false;
        }
    }

    ngOnInit(){
        this.page.actionBarHidden = true;
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

    logOff(){
        localStorage.removeItem('user');
        this.showLogin = true;

    }

    onTap(phone, password) {
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
    }
}