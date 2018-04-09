import { IEmployee } from "./../../interfaces/IEmployee";
import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular";
import { Page } from "tns-core-modules/ui/page";
import { DataService } from "./../../shared_module/services/data.service";
import { Observable } from "rxjs/Observable";

@Component({
    moduleId: module.id,
    selector: 'welcome',
    templateUrl: 'users.component.html',
    styleUrls: ['users.component.css']
})
export class UsersComponent implements OnInit {

    public employees: Observable<IEmployee[]>;
    private employee: IEmployee;

    constructor(
        private page: Page,
        private dataService: DataService,
        private routerExtensions: RouterExtensions) {

        page.actionBarHidden = true;
    }

    ngOnInit() {
        this.employees = this.dataService.getUsers();
    }

    onItemTap(args) {
        const employee = <IEmployee>(args.object.items[args.index]);
        localStorage.setItem('employee', JSON.stringify(employee));
        this.routerExtensions.navigate(['expenses']);
    }
}