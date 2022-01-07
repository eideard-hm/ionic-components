import { Component } from '@angular/core';
import { Componente } from 'src/app/interfaces/component.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  components: Componente[] = [
    {
      icon: 'american-football',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'beaker-outline',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'add-circle-outline',
      name: 'Fab',
      redirectTo: '/fab'
    },{
      icon: 'infinite-outline',
      name: 'Infinite Scroll',
      redirectTo: '/infinite-scroll'
    }
  ];

}
