import { Component, OnInit } from '@angular/core';
import {
    DynamicFormControlModel,
    DynamicCheckboxModel,
    DynamicInputModel,
    DynamicRadioGroupModel,
    DynamicFormService,
    DynamicFormGroupModel,
    DynamicFormArrayModel,
    DynamicFormLayout

} from "@ng-dynamic-forms/core";

import { FormGroup, FormArray} from '@angular/forms';

import * as _ from "lodash";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  // formSchema = {};
  //
  // formLayout = [];
  //
  // formModel = {"first_name": '', "last_name": ''};
  //
  //

//  ARRAY_MODEL = ['products', 'children'];

    ARRAY_MODEL = [];
    //nutrition =["Energy", "Fat", "Sugars"];
    nutrition = [];



    MY_FORM_MODEL: DynamicFormControlModel[] = [


      new DynamicFormGroupModel({

        id: "addressLocation",
        group: [
            new DynamicInputModel({

                id: "zipCode",
                label: "Zip Code",
                placeholder: "ZIP"
            }),
            new DynamicInputModel({

                id: "state",
                label: "State",
                placeholder: "State"
            }),
            new DynamicInputModel({

                id: "city",
                label: "City",
                placeholder: "City"
            })
        ]
    }),


      new DynamicFormGroupModel({

          id: "nutrients",
          legend: "Nutrients",

          group: [
            new DynamicFormGroupModel({

              id: "sugar",
              legend : "Sugar",
              group: [
                  new DynamicInputModel({

                      id: "intake",
                      label: "Intake %",

                  }),
                  new DynamicInputModel({

                    id: "quantity",
                    label: "Quantity",
                  }),
              ]

            }),
            new DynamicFormGroupModel({

              id: "fat",
              label : "Fat",
              group: [
                new DynamicInputModel({

                    id: "intake",
                    label: "Intake %",

                }),
                new DynamicInputModel({

                  id: "quantity",
                  label: "Quantity",
                }),
              ]

            }),
            new DynamicFormGroupModel({

              id: "energy",
              label : "Energy",
              group: [
                new DynamicInputModel({

                    id: "intake",
                    label: "Intake %",

                }),
                new DynamicInputModel({

                  id: "quantity",
                  label: "Quantity",
                }),
              ]

            }),

          ]
      },{"element": {
          control: "table"
      },}),
    //
    // new DynamicFormGroupModel({
    //
    //     id: "address",
    //     legend: "Address",
    //     group: [
    //         new DynamicInputModel({
    //
    //             id: "street",
    //             label: "street"
    //         }),
    //         new DynamicInputModel({
    //
    //             id: "zipCode",
    //             label: "Zip Code"
    //         })
    //     ]
    // }),
    //
    // new DynamicFormArrayModel({
    //
    //   id: "brands",
    //   label : "Brands",
    //   initialCount: 1,
    //   groupFactory: () => {
    //       return [
    //           new DynamicInputModel({
    //               id: "brand",
    //               label: "Brand Name"
    //           })
    //       ];
    //   }
    // }),
  ];



  MY_FORM_LAYOUT: DynamicFormLayout = {


  "addressLocation": {
      element: {
          control: "row",
          type: "div",
      },

  },

  "zipCode": {

      grid: {
          host: "col col-sm-2"
      }
  },

  "state": {

      grid: {
          host: "col col-sm-4"
      }
  },

  "city": {

      grid: {
          host: "col col-sm-6"
      }
  },

"nutrients":{
  element: {
      control: "hide",

  },
}

}




  formModel:DynamicFormControlModel[]  = [];
  formArrayControl = [];
  formArrayModel = [];
  formGroup;

  formArraySControl;
  formArraySModel;

  formLayout: DynamicFormLayout = this.MY_FORM_LAYOUT;




  constructor(private formService: DynamicFormService) {}

  ngOnInit() {

    _.each(this.ARRAY_MODEL, (value) => {

        this.MY_FORM_MODEL.push(new DynamicFormArrayModel({

          id: value,
          label : value,
          initialCount: 1,
          groupFactory: () => {
              return [
                  new DynamicInputModel({
                      id: "n-zip",
                      label: "Zip"
                  }),
                  new DynamicInputModel({
                      id: "n-state",
                      label: "State"
                  }),
                  new DynamicInputModel({
                      id: "n-city",
                      label: "City"
                  })
              ];
          }
      }));
    });



    this.formModel = this.MY_FORM_MODEL;

    this.formGroup = this.formService.createFormGroup(this.formModel);


    _.each(this.ARRAY_MODEL, (value) => {

      this.formArrayControl.push(this.formGroup.get(value) as FormArray);

      this.formArrayModel.push(this.formService.findById(value, this.formModel) as DynamicFormArrayModel);
    });



    this.formArraySControl = this.formGroup.get("brands") as FormArray;

    this.formArraySModel = this.formService.findById("brands", this.formModel) as DynamicFormArrayModel;




   }


   addSingleItem(){
     console.log(this.formArraySControl);
     console.log(this.formArraySModel);
      this.formService.addFormArrayGroup(this.formArraySControl, this.formArraySModel);
   }
   addItem(index) {

    console.log(index);
    console.log(this.formArrayControl[index])
    console.log(this.formArrayModel)
    this.formService.addFormArrayGroup(this.formArrayControl[index], this.formArrayModel[index]);
  }
  // //
  // clear() {
  //     this.formService.clearFormArray(this.formArrayControl, this.formArrayModel);
  // }
  //
  // removeItem(context: DynamicFormArrayModel, index: number) {
  //   this.formService.removeFormArrayGroup(index, this.formArrayControl, context);
  // }




}
