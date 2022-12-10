import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CardShowComponent } from './components/card-show/card-show.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { ConverterComponent } from './components/shared/converter/converter.component';
import { DetailsComponent } from './components/details/details.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
