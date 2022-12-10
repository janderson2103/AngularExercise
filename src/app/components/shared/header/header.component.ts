import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Currencies } from '../constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  readonly USD = Currencies.USD;
  readonly GBP = Currencies.GBP;
  readonly EUR = Currencies.EUR;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  public onClick(from: string, to: string): void {
    this.router.navigate(['detail', from, to]);
  }

}
