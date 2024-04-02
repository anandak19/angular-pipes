import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderCheck',
  standalone: true
})
export class GenderCheckPipe implements PipeTransform {

  transform(name: string, gender: string): string {
    if (gender.toLowerCase() === 'male') {
      return 'Mr. ' + name;
    } else if (gender.toLowerCase() === 'female') {
      return 'Mrs. ' + name;
    } else {
      return name;
    }
  }

}
