import { Pipe, PipeTransform } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(searchData: any[], searchText: string, column: string): any {
    console.log(searchData);
    if (isNullOrUndefined(searchText) || searchText === '') {
      return searchData;
    }

    console.log(searchText);
    console.log(column);
    searchText = searchText.toLowerCase();
    return searchData.filter(item => {
      return item[column].toLowerCase().includes(searchText);
    });
  }

}
