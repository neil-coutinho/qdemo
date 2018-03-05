import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QFormComponent } from './q-form.component';



const routes: Routes = [
  {
    path: '',
    component: QFormComponent,
    data: {
      title: 'Schema form',
      icon: 'icon-layout-cta-right',
      caption: 'variants color of nav bar',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class QFormsRoutingModule { }
