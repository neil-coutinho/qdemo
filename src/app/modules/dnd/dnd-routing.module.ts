import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DndComponent } from './dnd.component';

const routes: Routes = [{
  path: '',
  component: DndComponent,
  data: {
    title: 'DND',
    icon: 'icon-layout-cta-right',
    caption: '',
    status: true
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DndRoutingModule { }
