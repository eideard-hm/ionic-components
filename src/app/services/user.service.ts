import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../interfaces/users.interface';
import { Componente } from '../interfaces/component.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Users[]>{
   return this.http.get<Users[]>('https://jsonplaceholder.typicode.com/users');
  }

  getMenuOpts(): Observable<Componente[]>{
    return this.http.get<Componente[]>('/assets/data/menu-opts.json');
   }
}
