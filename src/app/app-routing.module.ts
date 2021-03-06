import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: './features/welcome/welcome.module#WelcomeModule'
  },
  {
    path: 'interface',
    loadChildren: './features/interface/interface.module#InterfaceModule'
  }, {
    path: 'addgame',
    loadChildren: './features/interface/interface-add/interface-add.module#InterfaceAddModule'
  },
]
  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
