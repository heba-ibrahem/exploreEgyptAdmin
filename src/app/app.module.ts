import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AdminLoginRoutingModule} from './components/admin-login/login.routing.component'
import { AdminRoutingModule } from './components/admin-components/admin.routing.component';
import { ShowHotelsComponent } from './components/admin-components/components/hotels/show-hotels/show-hotels.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowHotelsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminLoginRoutingModule,
    AdminRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
