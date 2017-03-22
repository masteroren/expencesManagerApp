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

    constructor(private page: Page, private httpService: HttpService, private routerExtensions: RouterExtensions) {
        page.actionBarHidden = true;
    }

    ngOnInit() {

        // this.httpService.test()
        //     .subscribe(data => {
        //         console.log(data.json());
        //     });


        // let employee = localStorage.getItem('employee');
        // if (employee) {
        //     this.routerExtensions.navigate(["/expenses"], {
        //         transition: {
        //             name: "flip"
        //         }
        //     });
        // } else {
            this.httpService.users()
                .subscribe(data => {
                    this.employees = data.json();
                    console.log(this.employees);
                });
        // }
    }

    onItemTap(args) {
        let index = args.index;
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