import { Component, OnInit } from '@angular/core';

import { QFrameworkModule } from '../../framework/q-framework.module.d';
import { QFrameworkComponent } from '../../framework/q-framework.component.d';
import { QInputComponent } from '../../framework/q-input.component';


import { FrameworkLibraryService } from 'angular4-json-schema-form';

let QFramework = {
  framework: QFrameworkComponent,
   // widgets:
   // {
   //   'input': QInputComponent
   // },
    scripts: [
        '//code.jquery.com/jquery-3.2.1.slim.min.js',
        '//cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js',

    ],
}







@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  formSchema;
  formLayout;
  formModel = {};



  constructor( private frameworkLibrary: FrameworkLibraryService ) {


  }

  ngOnInit() {

    this.frameworkLibrary.setFramework(QFramework);

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
               "comment": {
                 "title": "Comment",
                 "type": "string",
                 "maxLength": 500,
                 "validationMessage": "Comment is a required field"
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
                      "price": { "type": "number" }
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
        "key": "comment",
        "type": "textarea",
        "placeholder": "Make a comment"
      },
      {
        "title": "<h4>Products</h4>",
        "type": "section",
        "items":[
          {
            "type": "section",
            "htmlClass": "card p-15",
            "fieldHtmlClass": "btn-info",
            "items": [
              {
                "key": "products",
                "type": "array",
                "orderable": false,
                "listItems": 1,
                "notitle": true,
                  "fieldHtmlClass": "btn-info",

                "items":[
                  {
                    "type": "section",
                    "notitle": true,
                    "htmlClass": "p-15",
                    "display": "flex",
                    "flex-direction": "row wrap",
                    "items":[{
                      "key": "products[].name", "notitle": true, "placeholder": "Name","flex": "3 3 150px" ,"fieldHtmlClass": "form-control-bold form-control-uppercase"
                    },

                    {
                      "key": "products[].quantity", "notitle": true, "placeholder": "Quantity", "flex": "3 3 150px"
                    },{
                      "key": "products[].price", "notitle": true, "placeholder": "Price","flex": "3 3 150px"
                    }]
                  },

                ]

              }
            ]

          }
        ]



      },
      {
        "type": "section",
        "display": "flex",
        "flex-direction": "row wrap",
        "items": [
              { "key": "orderDate", "flex": "3 3 150px", "title": "Order Date",
             },
        ]

      },
      {
        "title": "<h4>Address</h4>",
        "type": "section",

        "items":[
          {
            "type": "section",
            "htmlClass": "card p-15",
            "items": [
              {
                "key": "shipTo",
                "title": "Ship To",
                "type": "section",
                "expandable": true,
                "expanded": true,
                "display": "flex",
                "flex-direction": "row wrap",
                "items":[
                  { "key": "shipTo.name", "flex": "3 3 150px"},
                  { "key": "shipTo.street", "flex": "3 3 150px"},
                  { "key": "shipTo.state", "flex": "3 3 150px"},
                ]

             },
             {
               "type": "div",


             },
              {
                "key": "billTo",
                "title": "Bill To",
                "expandable": true,
                "expanded": true,
                "type": "section",
                "display": "flex",
                "flex-direction": "row wrap",
                "items":[
                  { "key": "billTo.name", "flex": "3 3 150px"},
                  { "key": "billTo.street", "flex": "3 3 150px"},
                  { "key": "billTo.state", "flex": "3 3 150px"},
                ]

              }
            ]

          }

        ]


      },
      {
      "type": "help",
      "helpvalue": "<strong>Click on <em>Submit</em></strong> when you're done"
    },
      {
        "type": "submit",
        "style": "btn-info",
        "title": "Submit"
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
