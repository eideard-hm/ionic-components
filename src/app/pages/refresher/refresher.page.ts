import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRefresher } from '@ionic/angular';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  @ViewChild(IonRefresher) ionRefresher: IonRefresher;

  items = [];

  constructor() { }

  ngOnInit() {
  }

  doRefresh(e){
    setTimeout(() => {
      this.items = Array(20);
      this.ionRefresher.complete();
    }, 1500);
  }

}
