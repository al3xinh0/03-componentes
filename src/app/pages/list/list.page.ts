import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('userList', {static: false}) userList;

  usersList: Observable<any>;

  constructor(private dataService: DataService,
              private toastController: ToastController
              ) { }

  ngOnInit() {
    this.usersList = this.dataService.getUsers();
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  favorite(user) {
    this.presentToast('Guardó en Favoritos');
    // console.log('favorite', user);
    // CIERRA EL SLIDING CUANDO SE DA CLICK EN UNA OPCION
    this.userList.closeSlidingItems();
  }

  share(user) {
    this.presentToast('Compartió el item');
    // console.log('favorite', user);
    // CIERRA EL SLIDING CUANDO SE DA CLICK EN UNA OPCION
    this.userList.closeSlidingItems();
  }

  delete(user) {
    this.presentToast('Eliminó el item');
    // console.log('favorite', user);
    // CIERRA EL SLIDING CUANDO SE DA CLICK EN UNA OPCION
    this.userList.closeSlidingItems();
  }

}
