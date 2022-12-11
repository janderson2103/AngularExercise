import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Query, ConvertResponse, SymbolResponse, LatestResponse, TimeseriesResponse } from "../interface/fixer";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FixerService {
  private apiUrl = environment.apiURL;

  constructor(private http: HttpClient) { }

  public convert(query: Query): Observable<ConvertResponse> {
      const url = this.apiUrl + `/convert${this.createQueryParams(query)}`; 
      return this.http.get<ConvertResponse>(url);
  }

  public symbols(): Observable<SymbolResponse> {
      const url = this.apiUrl + `/symbols${this.createQueryParams()}`;
      return this.http.get(url);
  }

  public latest(query: Query): Observable<LatestResponse> {
    const url = this.apiUrl + `/latest${this.createQueryParams()}`;
    return this.http.get(url);
}
public timeseries(query: Query): Observable<TimeseriesResponse> {
    const url = this.apiUrl + `/timeseries${this.createQueryParams()}`;
    return this.http.get(url);
}

  private createQueryParams(query?: Query): string {
      let params: string[] = [];

      if (query?.from)
          params.push('from=' + query.from);
      
      if (query?.to)
          params.push('to=' + query.to);
      
      if (query?.amount)
          params.push('amount=' + query.amount);
  
      if (query?.symbols)
          params.push('symbols=' + query.symbols);

      if (query?.base)
          params.push('base=' + query.base);

      if (query?.start_date)
          params.push('start_date=' + query.start_date);

      if (query?.end_date)
          params.push('end_date=' + query.end_date);

      let queryParams = '';
      if (params.length > 0) {
          queryParams = '?' + params.join('&');
      }

      return queryParams;
  }
}
