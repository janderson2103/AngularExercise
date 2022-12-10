import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { RouterModule } from '@angular/router';
import { ConverterModule } from '../shared/converter/converter.module';



@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    RouterModule,
    ConverterModule
  ],
  exports: [DetailsComponent]
})
export class DetailsModule { }
