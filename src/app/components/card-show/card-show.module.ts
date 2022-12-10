import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardShowComponent } from './card-show.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CardShowComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [CardShowComponent]
})
export class CardShowModule { }
