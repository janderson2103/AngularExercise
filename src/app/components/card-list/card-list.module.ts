import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardShowModule } from '../card-show/card-show.module';
import { CardListComponent } from './card-list.component';



@NgModule({
  declarations: [CardListComponent],
  imports: [
    CommonModule,
    RouterModule,
    CardShowModule
  ],
  exports: [CardListComponent]
})
export class CardListModule { }
