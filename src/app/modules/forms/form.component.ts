import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray} from '@angular/forms';
import {
    DynamicFormControlModel,

    DynamicInputModel,

    DynamicFormService,

    DynamicFormLayout,


} from "@ng-dynamic-forms/core";







@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

    MY_FORM_MODEL: DynamicFormControlModel[] = [


    new DynamicInputModel({

        id: "sampleInput",
        label: "Sample Input",
        maxLength: 42,
        placeholder: "Sample input"
    }),

    //   new DynamicFormGroupModel({
    //
    //     id: "addressLocation",
    //     group: [
    //         new DynamicInputModel({
    //
    //             id: "zipCode",
    //             label: "Zip Code",
    //             placeholder: "ZIP"
    //         }),
    //         new DynamicInputModel({
    //
    //             id: "state",
    //             label: "State",
    //             placeholder: "State"
    //         }),
    //         new DynamicInputModel({
    //
    //             id: "city",
    //             label: "City",
    //             placeholder: "City"
    //         })
    //     ]
    // }),

  ];

  MY_FORM_LAYOUT: DynamicFormLayout = {
    // "addressLocation": {
    //       element: {
    //           control: "row",
    //           type: "div",
    //       },
    //   },
    //
    // "zipCode": {
    //
    //     grid: {
    //         host: "col col-sm-2"
    //     }
    // },
    // "state": {
    //
    //   grid: {
    //       host: "col col-sm-4"
    //   }
    // },
    // "city": {
    //
    //   grid: {
    //       host: "col col-sm-6"
    //   }
    // }
  };

  formModel:DynamicFormControlModel[] = this.MY_FORM_MODEL;

  formGroup:FormGroup;

  formLayout: DynamicFormLayout = this.MY_FORM_LAYOUT;





  constructor(private formService: DynamicFormService) {}

  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel);


  }

}
