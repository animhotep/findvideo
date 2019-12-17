import {Injectable} from '@angular/core';
import {Serie} from './models/serie';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private http: HttpClient) {
  }

  // https://metanit.com/web/angular2/6.2.php
  getUsers() {
    return this.http.get('https://reqres.in/api/users').pipe(map(
      (r: any) => r.data.map(user => this.toUser(user))
    ));
  }

  private toUser(user) {
    return {
      id: user.id,
      name: `ъъъъъ ${user.first_name}  ${user.last_name} ъъъъъъ`
    };
  }

  /*

    getUsers() {
      return fetch('https://reqres.in/api/users').then(r => r.json())
        .then(data => {
          return data.data.map(user => {
            return {
              id: user.id,
              name: user.first_name + user.last_name
            };
          });
        });
    }
  */


}
