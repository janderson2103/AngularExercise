import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FixerInterceptorProvider } from './interceptor/fixer.interceptor';
import { HomeModule } from './components/home/home.module';
import { DetailsModule } from './components/details/details.module';
import { HeaderModule } from './components/shared/header/header.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    DetailsModule,
    HeaderModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: FixerInterceptorProvider, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
