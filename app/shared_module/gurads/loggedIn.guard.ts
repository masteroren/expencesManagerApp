import { isNullOrUndefined } from 'utils/types';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../services/data.service';
import { RouterExtensions } from 'nativescript-angular';

@Injectable()
export class LoggedInGuard implements CanActivate {
    constructor(public routerExtensions: RouterExtensions, private dataService: DataService) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if (localStorage.getItem('employee')) {
            this.dataService.employee = JSON.parse(localStorage.getItem('employee'));
        } else {
            this.routerExtensions.navigate(['users']);
        }
        return true;
    }
}