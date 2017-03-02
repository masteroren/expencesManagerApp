import {IEmployee} from "../shared/interfaces/employee";
import {Component, OnInit, ViewChild, ElementRef} from "@angular/core";
import {HttpService} from "../shared/services/httpService";
import {RouterExtensions} from "nativescript-angular";

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

    constructor(private httpService: HttpService, private routerExtensions: RouterExtensions) {
        let employee = localStorage.getItem('employee');
        if (employee){
            this.routerExtensions.navigate(["/expenses"], {
                transition: {
                    name: "flip"
                }
            });
        }
    }

    ngOnInit() {
        this.httpService.users().subscribe((data: IEmployee[]) => {
            data.forEach((employee: IEmployee) => {
                this.list = [...this.list, employee.name];
                this.employees = [...this.employees, employee];
            });
        });
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