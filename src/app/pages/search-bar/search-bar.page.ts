import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.page.html',
  styleUrls: ['./search-bar.page.scss'],
})
export class SearchBarPage implements OnInit {

  albums: any[] = [];
  searchText: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.searchText = '';
    this.getData();
  }

  getData() {
    this.dataService.getAlbums().subscribe(albums => {
      console.log(albums);
      this.albums = albums;
    });
  }
  search(event) {
    console.log(event);
    this.searchText = event.detail.value;
  }

}
