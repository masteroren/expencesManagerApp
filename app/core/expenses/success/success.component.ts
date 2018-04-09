import {Component} from "@angular/core";
import {RouterExtensions} from "nativescript-angular";
import {Page} from "ui/page";

@Component({
    moduleId: module.id,
    selector: 'exp-success',
    templateUrl: 'success.component.html',
    styleUrls: ['success.component.css']
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