import {Injectable} from "@angular/core";
import {Http, Headers, Response, RequestOptions, URLSearchParams} from "@angular/http";
import {Observable as RxObservable} from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/toPromise";

const BASE_URL = 'http://192.168.1.4:3030';

@Injectable()
export class HttpService {
    constructor(private http: Http) {
    }

    get(method: string, payload: any = {}): any {
        let params = new URLSearchParams();
        for (let key in payload) {
            params.set(key, payload[key]);
        }

        return this.http.get(`${BASE_URL}/${method}`, {
            search: params
        })
            .map(res => res.json());
    }
}