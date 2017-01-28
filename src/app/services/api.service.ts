import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {
    constructor (private http: Http) {}
    executeCall (config: Configration): Observable<any> {
      let headers = new Headers({ 'Content-Type': 'application/json','apitoken':localStorage.getItem('token') });
      let options = new RequestOptions({ headers: headers });
      if(config.method==='post'){
        return this.http.post(config.url, config.data, options)
            .map(this.extractData)
            .catch(this.handleError);
      }else if(config.method==='get'){
        return this.http.get(config.url,options)
            .map(this.extractData)
            .catch(this.handleError);
      }
    }
    private extractData(res: Response) {
      return res.json();
    }
    private handleError (error: Response | any) {
      let errMsg: string;
      if (error instanceof Response) {
          const body = error.json() || '';
          const err = body.error || JSON.stringify(body);
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
          errMsg = error.message ? error.message : error.toString();
      }
      return Promise.reject(errMsg);
    }

}

export interface Configration {
    method:string;
    data: any;
    url: string;
}