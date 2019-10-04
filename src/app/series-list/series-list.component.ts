import {Component, OnInit} from '@angular/core';
import {SeriesService} from '../series.service';
import {Serie} from '../models/serie';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  constructor(private service: SeriesService) {
  }

  series: Serie[];

  ngOnInit() {
    this.service.getUsers().subscribe(data => {
      console.log(data);
      this.series = data;
      /*      this.series = data.data.map(s => {
              return {id: s.id, name: s.first_name + s.last_name};
            });*/

    });
  }

}
