import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeEn from '@angular/common/locales/en';
import localeEs from '@angular/common/locales/es';
import localeJa from '@angular/common/locales/ja';
import localeRu from '@angular/common/locales/ru';
import { MaterialModule } from './material/material.module';
import { CoreModule } from './core/core.module';
import { RoutingModule } from './routing/routing.module';

[localeFr, localeEn, localeEs, localeJa, localeRu]
    .forEach((locale) => {
      registerLocaleData(locale);
    });

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    CoreModule,
    MaterialModule,
    RoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
