import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { LocalComponents } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  localComponents: Observable<LocalComponents[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.localComponents = this.dataService.getMenuOptions();
  }

}
