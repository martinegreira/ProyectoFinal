import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterfacePrincipal} from './features/interface/interface-principal/interface-principal.component';

@NgModule({
  declarations: [AppComponent, InterfacePrincipal],
  imports: [BrowserModule, AppRoutingModule,],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
