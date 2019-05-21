import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InterfaceAddComponent } from './interface-add/interface-add.component';

const routes: Routes = [
  {
    path: '',
    component: InterfaceAddComponent
  },

];

@NgModule({
  declarations: [InterfaceAddComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class InterfaceAddModule { }
