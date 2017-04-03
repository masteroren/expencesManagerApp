import {Component} from "@angular/core";
import {RouterExtensions} from "nativescript-angular";
import {Page} from "ui/page";

@Component({
    selector: 'exp-failure',
    templateUrl: 'expenses/failure/failure.component.html',
    styleUrls: ['expenses/failure/failure.component.css']
})
export class FailureComponent{

    constructor(private page: Page, private routerExtensions: RouterExtensions){
        page.actionBarHidden = true;
    }

    backToExpenses(){
        this.routerExtensions.back();
    }
}
