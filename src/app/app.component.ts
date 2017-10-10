import {Component, OnInit} from '@angular/core';
import {ApiServiceService} from './services/api-service.service'
import {Person} from './modules/persons/person';
import {PersonsComponent} from './modules/persons/persons.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
    title = 'app';

    mydata: /*Person[]*/any;
    createdPerson: {};

    constructor(private httpService: ApiServiceService) {
        this.mydata = [];
    }

    ngOnInit(): void {
        //get
        this.httpService.getData().subscribe(
            (respone) => {
                console.log('get', respone);
                this.mydata = respone;
            }
        );

        //post
        let personObj: {name: string; gender: string; phone: string} = {
            name: "dsasd", gender: "fds", phone: "dsa"
        };

        let body = '';
        for (let key in personObj) {
            if (body.length) {
                body += '&'
            }
            body += key + '=' + encodeURIComponent(personObj[key]);
        }

        // this.httpService.postData(body)
        //     .subscribe(response => this.createdPerson = response);

    }

}
