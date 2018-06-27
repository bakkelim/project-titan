import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SecurityModule } from './security/security.module';
import { AppRoutingModule } from './app-routing.module';
import { StartComponent } from './start/start.component';
import { EndComponent } from './end/end.component';
import { NavbarModule } from './shared/navbar/navbar.module';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    EndComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SecurityModule,
    AppRoutingModule,
    NavbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
