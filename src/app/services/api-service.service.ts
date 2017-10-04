import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiServiceService {

  persons: any;

  private apiUrl = 'http://api.demo.lakmus.org/api/';

  constructor(private http: HttpClient) {

  }


  getData(): any {
    return this.http.get(this.apiUrl+'clients')
      .toPromise()
      .then(
        respone => {
          console.log(respone);
          this.persons = respone;
          return this.persons

        }

      )/*.catch(this.handleError)*/;
  }

  private handleError(error: any){
    console.error('error', error);
    return Promise.reject(error.message || error);
  }
}
