import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InterfacePrincipal} from './interface-principal/interface-principal.component';

const routes: Routes = [
  {
    path: '',
    component: InterfacePrincipal
  }
];

@NgModule({
  declarations: [InterfacePrincipal],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class InterfaceModule {}