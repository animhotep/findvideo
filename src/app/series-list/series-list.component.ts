import {Component, OnInit} from '@angular/core';
import {SeriesService} from '../series.service';
import {Serie} from '../models/serie';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  constructor(private service: SeriesService) {
  }

  series: Observable<Serie[]>;

 // series;

  ngOnInit() {
    this.series = this.service.getUsers();

/*    this.service.getUsers().then(series => {
      this.series = series;
    });*/
  }

}
