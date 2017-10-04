import {Component, OnInit} from '@angular/core';
import {ApiServiceService} from './services/api-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'app';

  mydata: any;

  constructor(private httpService: ApiServiceService){
    this.mydata = [];
  }

  ngOnInit(){
    this.httpService.getData().then(response => this.mydata = response);
  }

}
