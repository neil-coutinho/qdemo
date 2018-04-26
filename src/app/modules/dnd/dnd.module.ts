import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DndRoutingModule } from './dnd-routing.module';
import { DndComponent } from './dnd.component';
import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    DndRoutingModule,
    NgxDnDModule,
    FlexLayoutModule
  ],
  declarations: [DndComponent]
})
export class DndModule { }
