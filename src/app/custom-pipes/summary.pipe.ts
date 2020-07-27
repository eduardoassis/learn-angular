import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, limit?:number, extraInfo?:string): string {

    if (!value) {
      return null;
    }

    let actualLimit = (limit) ? limit : 50;

    let returnValue = value.substr(0, actualLimit) + "...";
    returnValue += (extraInfo) ? extraInfo : '';
    return returnValue;
  }

}
