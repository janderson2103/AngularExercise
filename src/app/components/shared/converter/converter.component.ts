import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Currencies, SymbolsKey } from '../constants';
import { FixerService } from 'src/app/service/fixer.service';
import { Query } from 'src/app/interface/fixer';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
                    
  @Input() from: string = Currencies.BRL;
  @Input() to: string = Currencies.USD;
  @Input() amount: number = 100;

  @Input() disabledFrom: boolean = false;

  public converterForm: FormGroup;

  public currencies: any[] = [];
  public unitRate: number = 0.0;
  public amountRate: number = 0.0;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private fixer: FixerService
  ) {
    this.converterForm = this.formBuilder.group({});

    const symbols = localStorage.getItem(SymbolsKey);
    if (symbols) {
      this.transformCurrencies(JSON.parse(symbols));
    }
  }

  public ngOnInit(): void {
    this.converterForm = this.formBuilder.group({
      from: [{ value: this.from, disabled: this.disabledFrom }],  
      to: this.to,  
      amount: [this.amount, Validators.required]
    });

    this.calculateUnitRate();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes?.to?.currentValue) {
      this.converterForm.get('to')?.patchValue(changes?.to?.currentValue);
    }
    if (changes?.from?.currentValue) {
      this.converterForm.get('from')?.patchValue(changes?.from?.currentValue);
    }
  }

  public displayFromCurrencyLabel(): string {
    return this.converterForm?.getRawValue()?.from;
  }

  public displayToCurrencyLabel(): string {
    return this.converterForm?.getRawValue()?.to;
  }

  private createConvertQuery(): Query {
    return this.converterForm?.getRawValue() as Query;
  }

  private createUnitQuery(): Query {
    return {
      from: this.converterForm?.getRawValue()?.from,
      to: this.converterForm?.getRawValue()?.to,
      amount: 1.0
    } as Query;
  }

  public onClickMoreDetails(): void {
    this.router.navigate(['detail', this.converterForm?.getRawValue()?.from, this.converterForm?.getRawValue()?.to]);
  }

  private calculateUnitRate(): void {
    this.fixer.convert(this.createUnitQuery()).subscribe((response) => {
      console.log ('[DEBUG] calculateUnitRate', response);
      if (response?.success && response?.result) {
        this.unitRate = response?.result;
      }
    });
  }

  public calculateRate(): void {
    this.fixer.convert(this.createConvertQuery()).subscribe((response) => {
      console.log ('[DEBUG] calculateRate', response);
      if (response?.success && response?.result) {
        this.amountRate = response?.result;
      }
    });
  }

  public done(): void {
    if (this.converterForm.valid) {
      this.calculateRate();
    }
  }

  public transformCurrencies(symbols: any): void {
    for (let key of Object.keys(symbols)) {
      this.currencies.push(
        {
          key: key,
          name: symbols[key]
        }
      );
    }
  }

}
