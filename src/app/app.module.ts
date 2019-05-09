import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { ComplianceModule } from './compliance/compliance.module';
import { ReadonlyModule } from './readonly/readonly.module';
import { HomeComponent } from './Components/home/home.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    AdminModule,
    ComplianceModule,
    ReadonlyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
