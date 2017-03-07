import {IEmployee} from "../shared/interfaces/employee";
import {Component, OnInit, ViewChild, ElementRef} from "@angular/core";
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
    public list: string[] = [];

    private userIn: boolean;

    @ViewChild('employeesList') employeesList: ElementRef;

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
            this.httpService.users().then((data: IEmployee[]) => {
                this.list = data.map((employee: IEmployee) => {return employee.name});
                this.employees = data;
                console.log(this.list);
            }, err => {
                console.log(err);
            });
        }
    }

    go() {
        let index = this.employeesList.nativeElement.selectedIndex;
        let employee = this.employees[index];
        if (employee) {
            localStorage.setItem('employee', JSON.stringify(employee));

            this.routerExtensions.navigate(["/expenses"], {
                transition: {
                    name: "flip"
                }
            });
        }
    }
}