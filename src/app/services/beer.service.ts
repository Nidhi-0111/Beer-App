import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BeerService {
  constructor(private http: HttpClient) {}
  getRandomBeer(): Observable<any> {
    return this.http.get<any>(`https://api.punkapi.com/v2/beers/random`);
  }

  getRandomNonAlcoholicBeer(): Observable<any> {
    return this.http.get<any>(`https://api.punkapi.com/v2/beers?abv_lt=0.6`);
  }

  fetchBeers(): Observable<any> {
    return this.http.get<any>(`https://api.punkapi.com/v2/beers`);
  }

  fetchBeersByName(beerName:string): Observable<any> {
    return this.http.get<any>(
      `https://api.punkapi.com/v2/beers?beer_name=${beerName}`
    );
  }
}
