import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSearchbar } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { Album } from '../../interfaces/album.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  @ViewChild(IonSearchbar) ionSearchbar: IonSearchbar;

  albums: Album[] = [];
  valorABuscar = '';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAlbums()
    .subscribe(data => this.albums = data);
  }

  onSearchChange(e){
    this.valorABuscar = this.ionSearchbar.value;
  }

}
