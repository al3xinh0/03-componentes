import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from 'src/app/components/popover/popover.component';

@Component({
  selector: 'app-popover-main',
  templateUrl: './popover-main.page.html',
  styleUrls: ['./popover-main.page.scss'],
})
export class PopoverMainPage implements OnInit {

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
  }

  async popoverShow(incomingEvent) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: incomingEvent,
      mode: 'ios',
      backdropDismiss: false
    });
    await popover.present();

    // const { data } = await popover.onDidDismiss();
    const { data } = await popover.onWillDismiss();
    console.log('Popover Main: ', data);
  }

}
