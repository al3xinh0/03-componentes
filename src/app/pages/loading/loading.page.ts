import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  dynamicLoading: any;

  constructor(private loadingController: LoadingController) { }

  ngOnInit() {
    // this.presentLoading();
    this.presentLoadingDynamic('Cargando dinámicamente...')
    setTimeout(() => {
      this.dynamicLoading.dismiss();
    }, 3000);
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async presentLoadingDynamic(loadingMessage: string) {
    this.dynamicLoading = await this.loadingController.create({
      message: loadingMessage,
    });
    await this.dynamicLoading.present();

    const { role, data } = await this.dynamicLoading.onDidDismiss();
    console.log('Loading dismissed!');
  }

}
