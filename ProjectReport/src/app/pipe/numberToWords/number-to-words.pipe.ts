import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToWords'
})
export class NumberToWordsPipe implements PipeTransform {

  numWords = require('num-words')

  transform(value: number, args?: any): any {
    if (value) {
      return this.numWords(value);
    }

  }

}
