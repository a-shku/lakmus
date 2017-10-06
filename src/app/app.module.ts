import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {ApiServiceService} from './services/api-service.service';
import { NoConflictStyleCompatibilityMode } from '@angular/material'
import {MatTableModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



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

    ],
    providers: [ApiServiceService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
