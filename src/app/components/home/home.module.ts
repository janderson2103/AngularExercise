import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConverterModule } from '../shared/converter/converter.module';
import { CardListModule } from '../card-list/card-list.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ConverterModule,
    CardListModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
