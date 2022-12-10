import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-show',
  templateUrl: './card-show.component.html',
  styleUrls: ['./card-show.component.css']
})
export class CardShowComponent {

  @Input() currencyName: string = '';
  @Input() currencyRate: number = 0.0;

  constructor() {}

}
