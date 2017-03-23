import {Component} from "@angular/core";
import {Page} from "ui/page";
import {ActivatedRoute} from "@angular/router";
import {PageRoute, RouterExtensions} from "nativescript-angular";


@Component({
    selector: 'finish',
    templateUrl: 'expenses/finish/finish-step.component.html'
})
export class FinishComponent {

    success: boolean = false;

    constructor(private page: Page, private activatedRoute: ActivatedRoute, private routerExtensions: RouterExtensions
    ) {
        page.actionBarHidden = true;
        this.success = activatedRoute.snapshot.params['id'] == 0;
    }

    backToExpenses(){
        if (this.success){
            this.routerExtensions.navigate(["/expenses"], {
                transition: {
                    name: "flip"
                }
            });
        } else {
            this.routerExtensions.backToPreviousPage();
        }
    }
}