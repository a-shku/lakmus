import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {ApiServiceService} from './services/api-service.service';
//import { MaterialModule } from '@angular/material'



@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        MaterialModule
    ],
    providers: [ApiServiceService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
