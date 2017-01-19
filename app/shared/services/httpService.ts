import {Injectable} from "@angular/core";
import {Http, Headers, Response, RequestOptions, URLSearchParams} from "@angular/http";
import {Observable as RxObservable} from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/toPromise";

const BASE_URL = 'http://192.168.1.5:3030';

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

    post(method: string, payload: any = {}):any{
        return this.http.post(`${BASE_URL}/${method}`, payload);
    }

    delete(method: string, payload: any = {}):any{
        return this.http.delete(`${BASE_URL}/${method}`, payload);
    }

    put(method: string, payload: any = {}):any{
        return this.http.put(`${BASE_URL}/${method}`, payload);
    }

    multipart(method: string, payload: any = {}, file: any):any{
        let params = new FormData();
        params.append("file", file);
        for(let key in payload){
            params.append(key, payload[key]);
        }
        let headers = new Headers();

        headers.append('Content-Type', 'multipart/form-data');
        return this.http.post(`${BASE_URL}/${method}`, params, headers);
    }
}