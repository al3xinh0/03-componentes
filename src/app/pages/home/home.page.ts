import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { LocalComponents } from 'src/app/interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  localComponents: Observable<LocalComponents[]>;

  constructor(private menuController: MenuController, private dataService: DataService) { }

  ngOnInit() {
    this.localComponents = this.dataService.getMenuOptions();
  }

  toggleMenu() {
    this.menuController.toggle();
  }

}
