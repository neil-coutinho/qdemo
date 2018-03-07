import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';
import { JsonSchemaFormService }  from 'angular2-json-schema-form';



@Component({
  selector: 'q-colorpicker-widget-component',
  styleUrls:[],
  template: `
    <div
      [class]="options?.htmlClass || ''">

      <label *ngIf="options?.title"
        [attr.for]="'control' + layoutNode?._id"
        [class]="options?.labelHtmlClass || ''"
        [style.display]="options?.notitle ? 'none' : ''"
        [innerHTML]="options?.title"></label>

        <input class="form-control"
        [(colorPicker)] ="controlValue"
        [style.background]="controlValue"
        [formControl]="formControl"
        [name]="controlName"
        [value]="controlValue"
        (input)="updateValue($event)"
        (blur)="updateValue($event)"
        />

    </div>`,
})
export class QColorpickerWidgetComponent implements OnInit {
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

  constructor(private jsf: JsonSchemaFormService) { }

  ngOnInit() {
    console.log('hello')
    console.log(this.jsf);
    this.options = this.layoutNode.options || {};
   this.jsf.initializeControl(this);
  }

  updateValue(event) {
    console.log(this.jsf);

    this.jsf.updateValue(this, event.target.value);
    console.log(event.target.value);
  }
}
