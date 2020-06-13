import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {

  fechaNacimiento: Date = new Date();
  customPickerOptions;
  customDate: Date = new Date();

  constructor() { }

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: (event) => {
          console.log('Clicked Save!');
          console.log(event);
          console.log(event.day.value);
          console.log(event.month.value);
          console.log(event.year.value);
          this.customDate = new Date(event.year.value, event.month.value, event.day.value);
          console.log(this.customDate);
        }
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    }
  }

  dateChange(event) {
    console.log(event);
    // FECHA EN FORMATO JAVASCRIPT
    console.log('Fecha en formato JavaScript: ', new Date(event.detail.value));
    // PARA UN MEJOR MANEJO DE FECHAS USAR: https://momentjs.com/
  }

}
