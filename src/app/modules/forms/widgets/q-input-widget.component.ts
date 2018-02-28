import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';

import { Subject } from 'rxjs/Subject';

import { JsonSchemaFormService } from '../../../../../node_modules/angular4-json-schema-form/src/json-schema-form.service';


@Component({
  selector: 'q-input-widget-component',
  template: `hello world`,

})
export class QInputWidgetComponent implements OnInit {
  formControl: AbstractControl;
  controlName: string;
  controlValue: any;
  dateValue: any;
  controlDisabled = false;
  boundControl = false;
  options: any;
  autoCompleteList: string[] = [];
  @Input() layoutNode: any;
  @Input() layoutIndex: number[];
  @Input() dataIndex: number[];

  constructor() { }

  ngOnInit() {
    //console.log('hello')
    //console.log(this.jsf);
  }
}
