import {Component, OnInit} from '@angular/core';
import {ApiServiceService} from './services/api-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'app';

  person: any = {name: 'fds', gender: 'male'};

  mydata: any;

  constructor(private httpService: ApiServiceService){
    this.mydata = [];
  }

  ngOnInit(): void{
   let a: any = this.httpService.getData().subscribe(
     respone => {
       console.log('get', respone);
       this.mydata = respone;
     }

     )
    console.log('aaa', a);/*.then(
        persons => {
          this.mydata = persons;
          console.log('mydata', this.mydata);
        }*/
    /*function(response ){
      console.log('response', response);
      //mydata = response;
    }*/

    //);

   let personObj: any = {
      name: "dsasd", gender: "fds", phone: "dsa"
    };

    let enc = encodeURIComponent(personObj);

    let fd: FormData = new FormData();

    let  body= '';
    for(let key in personObj) {

      if (body.length) {
        body += '&'
      }

      body += key + '=' + encodeURIComponent(personObj[key]);


    }

    /*for(var pair of fd.get()) {
      console.log('adsfadfadsf',  pair[0]+ ', '+ pair[1]);
    }*/

    this.httpService.postData(body);



  }

}
