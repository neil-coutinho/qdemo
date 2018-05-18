import { Component, Input, OnInit, OnChanges, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { JsonSchemaFormService }  from 'angular2-json-schema-form';




@Component({
  selector: 'q-dataTabel-widget-component',
  template: `

  <form  #dataTable="ngForm" (ngSubmit)="onSubmit(dataTable)">
    <div class="form-group">
      <label>Name</label>
      <input type="text" name="Name"/>
    </div>
    <div class="form-group">
      <label>Code</label>
      <input type="text" name="Code"/>
    </div>
    <div class="form-group">
    <button type="submit" class="btn btn-success" [disabled]="!dataTable.form.valid">Submit</button>
    </div>

  </form>


  <ngx-datatable
    class="data-table table-responsive"
    [columnMode]="'force'"
    [rows]="rows" [rowHeight]="60" sortAscending="'icon-search'">

    <ngx-datatable-column [name]="col.name" *ngFor="let col of cols">

      <ng-template ngx-datatable-cell-template let-rowIndex="rowIndex" let-value="value" let-row="row">
      <span
            title="Double click to edit"
            (dblclick)="editing[rowIndex + '-'+col.prop] = true"
            *ngIf="!editing[rowIndex + '-'+col.prop]">
            {{value}}
          </span>
          <input
            autofocus
            (blur)="updateValue($event, col.prop, rowIndex)"
            *ngIf="editing[rowIndex+ '-'+col.prop]"
            type="text"
            [value]="value"
          />
      </ng-template>

    </ngx-datatable-column>
  </ngx-datatable>


  `,
})
export class QDataTableWidgetComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  rows = [];
  cols = [];
  editing = {};

  @Input() layoutNode: any;
  @Input() layoutIndex: number[];
  @Input() dataIndex: number[];
  options: any;
  constructor(private jsf: JsonSchemaFormService) { }

  ngOnInit() {
  this.options = this.layoutNode.options || {};
  console.log(this.jsf.data);

  console.log('options', this.options);

  for(let key in this.layoutNode.options.rows.properties) {
    let obj = this.layoutNode.options.rows.properties[key];
    this.cols.push({name: obj.title, sortable: false, prop: obj.prop})
  }

  this.rows = this.jsf.data[this.layoutNode.name];

  // this.jsf.initializeControl(this);
  }


  updateValue(event, cell, rowIndex) {
    console.log('event', event)
    console.log('cell', cell)
    console.log('inline editing rowIndex', rowIndex)
     this.editing[rowIndex + '-' + cell] = false;
     this.rows[rowIndex][cell] = event.target.value;
     this.rows = [...this.rows];
     console.log(this.rows);
     console.log('UPDATED!', this.rows[rowIndex][cell]);

    this.jsf.data[this.layoutNode.name] = [...this.rows];
  }

  onSubmit(formData) {
    console.log('formData', formData);
  }


}
