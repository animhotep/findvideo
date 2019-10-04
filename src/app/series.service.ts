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

  getUsers() {
    return this.http.get('https://reqres.in/api/users').pipe(
      map(r => {
        return r.data.map(user => {
          return {
            id: user.id,
            name: user.first_name + user.last_name
          };
        });
      })
    );
  }
}
