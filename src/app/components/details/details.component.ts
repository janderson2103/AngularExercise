import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SymbolsKey } from '../shared/constants';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() from: string = '';
  @Input() to: string = '';
  @Input() amount: number = 0;

  constructor(
    private route: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.route.params
      .subscribe((params) => {
        this.to = params.to;
        this.from = params.from;
        this.amount = params.amount;
      });
  }

  public fromSymbolName(): string {
    const symbols = localStorage.getItem(SymbolsKey);
    if (symbols) {
      const symbolObj = JSON.parse(symbols);
      console.log (symbolObj);
      return (symbolObj && symbolObj.hasOwnProperty(this.from) ? symbolObj[this.from] : '');
    }
    return '';
  }

}
