import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): string {
      let array = [];
      for (let char of value) {
          array.push(char);
      }
      let reverseArr = array.reverse();
      let reverseStr = reverseArr.join('');
      return reverseStr;
  }

}
