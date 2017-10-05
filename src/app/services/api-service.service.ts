import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ApiServiceService {

  persons: any;

  private apiUrl = 'http://api.demo.lakmus.org/api/';

  constructor(private http: HttpClient) {

  }


  getData(): Observable<any> {
      let observable: Observable<any>;
      if(observable){
          return observable;
      } else {
          return this.http.get(this.apiUrl+'clients')/*.subscribe(
           respone => {
           console.log('get', respone);
           this.persons = respone;
           return this.persons

           }
           );*/
          //.toPromise()
          /*.then(
           respone => {
           console.log(respone);
           this.persons = respone;
           return this.persons

           }

           ).catch(this.handleError);*/
      }

  }



  postData(fd: any){
    this.http.post(this.apiUrl+'clients', fd,
      {headers:
        new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8')
          .set('Accept', 'application/json')})
      .toPromise()
      .then(response => {
        console.log('post', response);
      })
  }

  /*private handleError(error: any){
    console.error('error', error);
    return Promise.reject(error.message || error);
  }*/
}
