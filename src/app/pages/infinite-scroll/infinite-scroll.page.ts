import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  @ViewChild(IonInfiniteScroll, {static: true}) infiniteScroll: IonInfiniteScroll;

  data: any[] = Array(20);

  constructor() { }

  ngOnInit() {
  }

  loadData(event) {
    console.log('Cargando siguientes');
    setTimeout(() => {
      if (this.data.length > 50) {
        event.target.complete();
        // CON CUALQUIERA DE LAS DOS FORMAS DEJA DE MOSTRAR EL LOADING
        this.infiniteScroll.disabled = true;
        // event.target.disabled = true;
        return;
      }

      const newArray = Array(20);
      this.data.push(...newArray);
      event.target.complete();
    }, 1000);
  }

}
