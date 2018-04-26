import { Component, OnInit } from '@angular/core';

import { WidgetLibraryService } from 'angular2-json-schema-form';
import { FrameworkLibraryService } from 'angular2-json-schema-form';
import { QMultiSelectWidgetComponent } from './widgets/q-multi-select-widget.component';
import { QInputWidgetComponent } from './widgets/q-input-widget.component';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})


export class QFormComponent implements OnInit {

  formSchema;
  formLayout;
  formModel = {};

  constructor( private frameworkLibrary: FrameworkLibraryService, private widgetLibrary: WidgetLibraryService ) {

    widgetLibrary.registerWidget('markdown', QInputWidgetComponent);
    widgetLibrary.registerWidget('multiselect', QMultiSelectWidgetComponent);

  }

  ngOnInit() {



    this.formSchema = {


        "id":"#",
        "type": "object",
         "title": "Purchase Orders",
         "definitions": {
           "address":{
             "type": "object",
             "properties":{
               "name": { "type": "string", "title": "Name" },
               "street": { "type": "string", "title": "Street" },
               "state":  { "type": "string", "title": "State" }
             }
           },


         },
           "properties": {

             "language": {
               "title": "Language",
               "type": "array",
               "items":{
                 "type": "string",
                 "enum": [ "EN", "ES", "FR", "DE", "AB" ]

               }
             },


               "comment": {
                 "title": "Comment",
                 "type": "string",
                 "maxLength": 500,
                 "validationMessage": "Comment is a required field"
               },
               "description": {
                 "title": "Description",
                 "type": "string",
                 "maxLength": 500,
                 "validationMessage": "Description is a required field"
               },

               "shipTo": {
                  "$ref": "#/definitions/address",
                  "title": "Ship To",

               },
               "billTo": {
                  "$ref": "#/definitions/address",
                  "title": "Bill To",

               },
               "products": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {

                      "name": { "type": "string" },
                      "quantity": { "type": "number" },
                      "price": { "type": "number" },

                    },
                    "required": [ "name" ]
                  }
                },
               "orderDate": {
                  "title": "Order Date",
                  "type": "string",
                  "format": "date",

               }
           },
           "required": [
             "comment",
             "orderDate"
           ]




      }


    this.formRender();
  }

  /**
   * [Form Layout definition]
   * @return [void]
   */
  formRender() {

    this.formLayout = [
      {
          "key": "language",
      		"type": "multiselect"
  		}
    ]
  }

  /**
   * [Form submit function]
   * @return [void]
   */
  submit($event) {
    console.log(`hello world`);
    console.log($event);
  }

}
