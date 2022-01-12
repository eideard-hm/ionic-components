import { Pipe, PipeTransform } from '@angular/core';
import { Album } from '../interfaces/album.interface';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: Album[], text: string = ''): Album[] {

    if(text === ''){
      return value;
    }

    if(!value){
      return value;
    }

    text = text.toLowerCase();

    return value.filter(item => item.title.toLowerCase().includes(text));
  }

}
