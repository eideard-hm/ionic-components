import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/component.interface';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  options: Observable<Componente[]>;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.options = this.userService.getMenuOpts();
  }
}
