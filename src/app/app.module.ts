import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CardShowComponent } from './components/card-show/card-show.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { ConverterComponent } from './components/shared/converter/converter.component';
import { DetailsComponent } from './components/details/details.component';
import { FixerInterceptorProvider } from './interceptor/fixer.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardShowComponent,
    CardListComponent,
    HeaderComponent,
    ConverterComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: FixerInterceptorProvider, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
