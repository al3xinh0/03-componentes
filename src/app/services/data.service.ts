import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalComponents } from '../interfaces/interfaces';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenuOptions() {
    return this.http.get<LocalComponents[]>('assets/data/menu.json');
  }

  getAlbums() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getSuperheroes() {
    return this.http.get<any[]>('assets/data/superheroes.json').pipe( delay(3000) );
  }
}
