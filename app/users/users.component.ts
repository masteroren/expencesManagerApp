import {IEmployee} from "../shared/interfaces/IEmployee";
import {Component, OnInit} from "@angular/core";
import {HttpService} from "../shared/services/httpService";
import {RouterExtensions} from "nativescript-angular";
import {Page} from "tns-core-modules/ui/page";

@Component({
    selector: 'welcome',
    templateUrl: 'users/users.component.html',
    styleUrls: ['users/users.component.css']
})
export class UsersComponent implements OnInit {

    private employees: IEmployee[] = [];
    private employee: IEmployee;

    constructor(private page: Page, private httpService: HttpService, private routerExtensions: RouterExtensions) {
        page.actionBarHidden = true;
    }

    ngOnInit() {
        let employee = localStorage.getItem('employee');
        if (employee) {
            this.routerExtensions.navigate(["expenses"]);
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
            this.routerExtensions.navigate(["expenses"]);
        }
    }
}