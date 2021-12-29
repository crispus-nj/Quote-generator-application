import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quoteFilterStatus',
  pure: false
})
export class QuoteFilterStatusPipe implements PipeTransform {

  transform(value: any, filterStatus: string, statusName: string){
    if(value.length === 0 || filterStatus === ''){
      return value
    }
    let quoteArray = []
    for (const status of value) {
      if(status[statusName] === filterStatus){
        quoteArray.push(status)
      }
    }
    return quoteArray;
  }

}
