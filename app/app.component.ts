import {Component, OnInit} from "@angular/core";

@Component({
    selector: "app",
    template: "<page-router-outlet></page-router-outlet>"
})
export class AppComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
