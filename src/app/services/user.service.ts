import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../interfaces/users.interface';
import { Componente } from '../interfaces/component.interface';
import { Album } from '../interfaces/album.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>('https://jsonplaceholder.typicode.com/users');
  }

  getMenuOpts(): Observable<Componente[]> {
    return this.http.get<Componente[]>('/assets/data/menu-opts.json');
  }

  getAlbums(): Observable<Album[]>{
    return this.http.get<Album[]>('http://jsonplaceholder.typicode.com/albums');
  }
}
