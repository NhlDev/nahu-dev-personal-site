import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ThemeModeSelectorComponent } from './components/theme-mode-selector/theme-mode-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ThemeModeSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
