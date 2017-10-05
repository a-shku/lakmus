import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class ApiServiceService {

    persons: any;

    private apiUrl = 'http://api.demo.lakmus.org/api/';

    constructor(private http: HttpClient) {

    }


    getData(): Observable<any> {
        let observable: Observable<any>;
        if (observable) {
            return observable;
        } else {
            return this.http.get(this.apiUrl + 'clients')
                .catch(this.handleError);
        }

    }


    postData(fd: any) {
        return this.http.post(this.apiUrl + 'clients', fd,
            {
                headers: new HttpHeaders()
                    .set('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8')
                    .set('Accept', 'application/json')
            }).catch(this.handleError);

    }

    private handleError(error: any) {
        console.error('error', error);
        return Observable.throw(error.message || error);
    }
}
