import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/component.interface';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  components: Observable<Componente[]>;

  constructor(private menuCtrl: MenuController,
              private userService: UserService){}

  ngOnInit(): void {
    this.components = this.userService.getMenuOpts();
  }



}
