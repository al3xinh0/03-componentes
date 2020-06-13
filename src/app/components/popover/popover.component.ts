import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  items = Array(40);

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {}

  onClick(index: number) {
    console.log('index: ', index)
    this.popoverController.dismiss({
      item: index
    });
  }

}
