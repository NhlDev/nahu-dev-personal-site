import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent, ThemeModeSelectorComponent, FooterComponent } from './components';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ThemeModeSelectorComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
