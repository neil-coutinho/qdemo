import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { EsService } from './es.service';
import{ EsPhoto } from './es-photo';

@Component({
  selector: 'app-es',
  templateUrl: './es.component.html',
  styleUrls: [
    '../../../assets/icon/icofont/css/icofont.scss'
  ]
})

export class EsComponent implements OnInit {
  rows:EsPhoto[];
  columns = [];
  @ViewChild(DatatableComponent) table: DatatableComponent;
  constructor(public es:EsService ) { }

  ngOnInit() {
    this.fetch();
  }

  /**
   * [fetch description]
   * @return [description]
   */
  fetch() {
    this.es.get()
        .subscribe(data => {
          for(let key in data[0]) {
            this.columns.push({prop: key})
          }
          console.log(this.columns);
          this.rows = data

        });

  }

}
