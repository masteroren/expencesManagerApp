import {IEmployee} from "../shared/interfaces/IEmployee";
import {Component, OnInit} from "@angular/core";
import {HttpService} from "../shared/services/httpService";
import {RouterExtensions} from "nativescript-angular";
import {Page} from "ui/page";

@Component({
    selector: 'welcome',
    templateUrl: 'welcome/welcome.component.html',
    styleUrls: ['welcome/welcome.component.css']
})


export class WelcomeComponent implements OnInit {

    private employees: IEmployee[] = [];
    private rememberMe: boolean = false;

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
            this.httpService.users().subscribe(data => {
                this.employees = data.json();
            });
        }
    }

    onItemTap(args) {
        let index = args.index;
        let employee = this.employees[index];
        if (employee) {
            if (this.rememberMe){
                localStorage.setItem('employee', JSON.stringify(employee));
            } else {
                localStorage.clear();
            }

            this.routerExtensions.navigate(["/expenses"], {
                transition: {
                    name: "flip"
                }
            });
        }

    }
}