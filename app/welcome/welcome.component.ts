import {IEmployee} from "../shared/interfaces/IEmployee";
import {Component, OnInit} from "@angular/core";
import {HttpService} from "../shared/services/httpService";
import {RouterExtensions} from "nativescript-angular";
import {Page} from "ui/page";
let dialogs = require("ui/dialogs");

@Component({
    selector: 'welcome',
    templateUrl: 'welcome/welcome.component.html',
    styleUrls: ['welcome/welcome.component.css']
})


export class WelcomeComponent implements OnInit {

    private employees: IEmployee[] = [];
    private employee: IEmployee;

    constructor(private page: Page, private httpService: HttpService, private routerExtensions: RouterExtensions) {
        page.actionBarHidden = true;
    }

    ngOnInit() {

        let employee = localStorage.getItem('employee');
        if (employee) {
            this.routerExtensions.navigate(["/expenses"], {
                transition: {
                    name: "flip"
                }
            });
        } else {
            this.httpService.users()
                .subscribe(data => {
                    this.employees = data.json();
                }, error => {
                    console.log(error)
                });
        }
    }

    onItemTap(args) {
        let index = args.index;
        this.employee = this.employees[index];
        if (this.employee) {
            localStorage.setItem('employee', JSON.stringify(this.employee));
        }
    }

    start() {
        if (this.employee) {
            this.routerExtensions.navigate(["/expenses"], {
                transition: {
                    name: "flip"
                }
            });
        } else {
            dialogs.alert({
                title: 'שכחת משהו...',
                message: 'אנא בחר עובד'
            })
        }
    }
}