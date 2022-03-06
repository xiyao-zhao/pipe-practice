import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(value: any, prop: string): any {
    let sortedArr = value.sort((a, b) => {
        if (a[prop] < b[prop]) {
            return -1;
        } else return 1;
    });
    return sortedArr;
  }
}
