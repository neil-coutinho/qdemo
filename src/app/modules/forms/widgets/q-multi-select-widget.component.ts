import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';


import { SelectModule, IOption } from 'ng-select';
import { JsonSchemaFormService }  from 'angular2-json-schema-form';
import { TitleMapItem } from 'angular2-json-schema-form/src/json-schema-form.service';



@Component({
  selector: 'q-multi-select-widget-component',
  template: `


    <ng-select
      name="systemLang"
      [multiple]="true"
      [options]="selectOptions"
      (selected)= "updateValue($event)"
      [(ngModel)]="selectedOptions">
    </ng-select>


  `,
})
export class QMultiSelectWidgetComponent implements OnInit {
  formControl: AbstractControl;
  controlName: string;
  controlValue: any;

  options: any;
  autoCompleteList: string[] = [];
  @Input() layoutNode: any;
  @Input() layoutIndex: number[];
  @Input() dataIndex: number[];


  selectOptions: Array<IOption> = [];
  selectedOptions = [];
  selectedList: TitleMapItem[] = [];

  constructor(private jsf: JsonSchemaFormService) { }

  ngOnInit() {

  console.log(this.layoutNode);

  for(let option of this.layoutNode.options.enum) {
    this.selectOptions.push({label: option , value: option})
  }

   this.jsf.initializeControl(this);
  }

  updateValue($event) {
    console.log($event);
    console.log(this.selectedOptions);
    this.selectedList = [];
    for(let option of this.selectedOptions) {
      this.selectedList.push({name: option, value: option, checked: true})
    }

    this.jsf.updateArrayCheckboxList(this, this.selectedList)
  }
}
