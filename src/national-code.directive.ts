/**
 * Created by mehrabi-s on 02/05/2017.
 */
import {Directive, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
    selector: '[national-code][formControlName],[national-code][formControl],[national-code][ngModel]',
    providers: [
        {provide: NG_VALIDATORS, useExisting: forwardRef(() => NationalCodeValidatorDirective), multi: true}
    ]
})
export class NationalCodeValidatorDirective implements Validator {
    constructor() {
    }

    validate(c: AbstractControl): { [key: string]: any } {
        let nationalCode = c.value;
        let pattern: RegExp = new RegExp(/^\d{10}$/, 'gi');
        let allDigitEqual =
            [
                '0000000000',
                '1111111111',
                '2222222222',
                '3333333333',
                '4444444444',
                '5555555555',
                '6666666666',
                '7777777777',
                '8888888888',
                '9999999999'
            ];

        if (!nationalCode ||
            nationalCode === null ||
            nationalCode === '') {
            return null;
        }

        if (
            (nationalCode.length && nationalCode.length !== 10) ||
            !pattern.test(nationalCode) ||
            allDigitEqual.filter(id => id === nationalCode).length > 0) {
            return {
                nationalCode: true
            };
        }

        let chArray = Array.from(nationalCode);
        let num0 = +chArray[0] * 10;
        let num1 = +chArray[1] * 9;
        let num2 = +chArray[2] * 8;
        let num3 = +chArray[3] * 7;
        let num4 = +chArray[4] * 6;
        let num5 = +chArray[5] * 5;
        let num6 = +chArray[6] * 4;
        let num7 = +chArray[7] * 3;
        let num8 = +chArray[8] * 2;
        let num9 = +chArray[9];
        let sum = (((((((num0 + num1) + num2) + num3) + num4) + num5) + num6) + num7) + num8;
        let mod = sum % 11;


        console.log(c);
        let validate = !(((mod < 2) && (num9 === mod)) || ((mod >= 2) && ((11 - mod) === num9)));
        return validate ? {
            nationalCode: validate
        } : null;
    }
}
