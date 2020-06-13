import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.page.html',
  styleUrls: ['./checkboxes.page.scss'],
})
export class CheckboxesPage implements OnInit {

  pageTitle: string;
  data: any[] = [
    {
      name: 'primary',
      selected: false
    },
    {
      name: 'secondary',
      selected: false
    },
    {
      name: 'tertiary',
      selected: false
    },
    {
      name: 'success',
      selected: true
    }
  ];

  constructor() { }

  ngOnInit() {
    this.pageTitle = 'Cards';
  }

  onClick(item: any) {
    console.log(item);
  }

}
