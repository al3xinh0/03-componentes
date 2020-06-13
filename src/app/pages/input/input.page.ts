import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  inputName: string;
  inputUser = {
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmitForm() {
    console.log('onSubmitForm()');
    console.log(this.inputUser);
  }

}
