import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiServiceService {

  persons: any;

  private apiUrl = 'http://api.demo.lakmus.org/api/';

  constructor(private http: HttpClient) {

  }


  getData(): any {
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

  postData(person: any){
    this.http.post(this.apiUrl+'clients', { "name": "dsasd", "gender": "fds", "phone": "dsa"},
      {headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')})
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
