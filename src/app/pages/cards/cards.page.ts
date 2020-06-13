import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {

  pageTitle: string;

  constructor() { }

  ngOnInit() {
    this.pageTitle = 'Cards';
  }

}
