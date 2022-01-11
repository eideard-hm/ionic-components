import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  data = Array(50);
  showBotton = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.loadData('h');
    }, 5000);
  }

  loadData(e) {
    if (!this.showBotton) {
      // console.log(e);
      this.infiniteScroll.complete();
      this.infiniteScroll.disabled = true;
      this.showBotton = true;

      console.log('Se ejecuto');
    }
  }

}
