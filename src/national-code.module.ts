import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NationalCodeValidatorDirective} from './national-code.directive';

@NgModule({
    declarations: [
        NationalCodeValidatorDirective
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    exports: [
        NationalCodeValidatorDirective
    ],
    providers: []
})
export class NationalCodeValidatorModule {
}
