import {Component} from "@angular/core";
import {RouterExtensions} from "nativescript-angular";
import {Page} from "ui/page";

@Component({
    selector: 'exp-success',
    templateUrl: 'expenses/success/success.component.html',
    styleUrls: ['expenses/success/success.component.css']
})
export class SuccessComponent{

    constructor(private page: Page, private routerExtensions: RouterExtensions){
        page.actionBarHidden = true;
    }

    backToExpenses(){
        this.routerExtensions.navigate(["expenses"], {
            transition: {
                name: "flip"
            }
        });
    }
}