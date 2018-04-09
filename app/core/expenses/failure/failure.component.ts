import {Component} from "@angular/core";
import {RouterExtensions} from "nativescript-angular";
import {Page} from "ui/page";

@Component({
    moduleId: module.id,
    selector: 'exp-failure',
    templateUrl: 'failure.component.html',
    styleUrls: ['failure.component.css']
})
export class FailureComponent{

    constructor(private page: Page, private routerExtensions: RouterExtensions){
        page.actionBarHidden = true;
    }

    backToExpenses(){
        this.routerExtensions.back();
    }
}
