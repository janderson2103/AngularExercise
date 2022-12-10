import { Component, OnInit } from '@angular/core';
import { SymbolsKey } from '../shared/constants';
import { FixerService } from 'src/app/service/fixer.service';
import { Query } from 'src/app/interface/fixer';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {


  public rates: any[] = [];
  private base = 'EUR';

  constructor(
    private fixer: FixerService
  ) { }

  public ngOnInit(): void {
    // get symbols from api
    this.fixer.latest(this.createQuery()).subscribe((response)=> {
      if (response?.success && response?.rates) {
        this.transformRates(response?.rates);
      }
    });
  }

  private createQuery(): Query {
    return {
      symbols: this.createSymbolList(),
      base: this.base
    } as Query;
  }

  private createSymbolList(): string {
    let response = '';
    const symbols = localStorage.getItem(SymbolsKey);
    if (symbols) {
      response = Object.keys(JSON.parse(symbols)).join(',');
    }
    return response;
  }

  private transformRates(rates: any): void {
    for (let key of Object.keys(rates)) {
      this.rates.push(
        {
          currencyName: key,
          currencyRate: rates[key]
        }
      );
    }
  }

}
