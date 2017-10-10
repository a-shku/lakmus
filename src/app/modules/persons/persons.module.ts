import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonsComponent } from './persons.component';
@NgModule({
    declarations: [
        PersonsComponent
    ],
    exports: [PersonsComponent],
    imports: [
        CommonModule
    ]
})
export class PersonsModule { }
