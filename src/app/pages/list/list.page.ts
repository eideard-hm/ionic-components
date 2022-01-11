import { Users } from './../../interfaces/users.interface';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild(IonList) ionList: IonList;

  users: Observable<Users[]>;


  constructor(private usersService: UserService) { }

  ngOnInit() {
    this.users = this.usersService.getUsers();
  }

  favorite(user) {
    this.ionList.closeSlidingItems();
    console.log('Favorite');
    console.log(user);
  }

  share(user) {
    this.ionList.closeSlidingItems();
    console.log('Share');
    console.log(user);
  }

  delete(user){
    this.ionList.closeSlidingItems();
    console.log('Delete');
    console.log(user);
  }

}
