import { Pipe, PipeTransform } from '@angular/core';
import { country } from '../models';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: country[], args: string): country[] {
     let result=value.filter(c=> c.continent.toLowerCase()=== args.toLocaleLowerCase());
     return result;
  }

}
