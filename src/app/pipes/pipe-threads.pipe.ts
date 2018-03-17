import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeThreads'
})
export class PipeThreadsPipe implements PipeTransform {

  transform(items: any, args?: any): any {
    let sorted = items.sort(function(a,b){
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    });
    console.log(sorted);

    return sorted;
  }

}
