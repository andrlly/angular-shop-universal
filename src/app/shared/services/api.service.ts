import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpHeaders } from '@angular/common/http';
import { TransferHttp } from '../../../modules/transfer-http/transfer-http';

@Injectable()
export class ApiService {

    private apiUrl = 'http://ukiegoods.loc/';
    // private apiUrl = 'http://news.hbmdev.com/';

    constructor(private http: TransferHttp,
        @Inject('ORIGIN_URL') public baseUrl: string
    ) {
    }

    private setHeaders(): HttpHeaders {
        const headersConfig = {
            'Content-Type': 'application/json, multipart/form-data',
            'Accept': 'application/json'
        };
        return new HttpHeaders(headersConfig);
    }

    // private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    private getUrl(url: string = ''): string {
        return this.apiUrl + url;
    }

    public get(url: string = ''): Observable<any> {
        return this.http.get(this.getUrl(url));
    }

    public post(url: string = '', body: Object = {}): Observable<any> {
        return this.http.post(this.getUrl(url), JSON.stringify(body), { headers: this.setHeaders() });
    }

    public put(url: string = '', body: Object = {}): Observable<any> {
        return this.http.put(this.getUrl(url), JSON.stringify(body), { headers: this.setHeaders() });
    }

}
