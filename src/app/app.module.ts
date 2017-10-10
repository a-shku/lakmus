import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {ApiServiceService} from './services/api-service.service';
import { NoConflictStyleCompatibilityMode } from '@angular/material'
import {MatTableModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PersonsModule} from './modules/persons/persons.module';

//https://toster.ru/q/443644


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NoConflictStyleCompatibilityMode,
        MatTableModule,
        BrowserAnimationsModule
        ,PersonsModule

    ],
    providers: [ApiServiceService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
