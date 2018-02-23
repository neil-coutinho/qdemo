import { Component, OnInit } from '@angular/core';
import { WidgetLibraryService } from 'angular4-json-schema-form';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent implements OnInit {

  constructor(private widgetLibrary: WidgetLibraryService) { }

  ngOnInit() {
    console.log(this.widgetLibrary.getAllWidgets());
  }

}
