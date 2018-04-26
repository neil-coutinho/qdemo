import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dnd',
  templateUrl: './dnd.component.html',
  styleUrls: ['./dnd.component.scss']
})
export class DndComponent implements OnInit {

  constructor() { }

  nestedLists = [
  {
    "label": "Item 1",
    "children": []
  },
  {
    "label": "Item 2",
    "children": [
      {
        "label": "Item 2a",
        "children": []
      },
      {
        "label": "Item 2b",
        "children": []
      },
      {
        "label": "Item 2c",
        "children": []
      }
    ]
  },
  {
    "label": "Item 3",
    "children": [
      {
        "label": "Item 3a",
        "children": []
      },
      {
        "label": "Item 3b",
        "children": []
      },
      {
        "label": "Item 3c",
        "children": []
      }
    ]
  }
];

  ngOnInit() {
  }

  log($event) {
    console.log($event);
  }

}
