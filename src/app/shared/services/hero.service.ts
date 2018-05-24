
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Hero } from '../models/hero.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HeroService {
  private heroesUrl = 'https://udem.herokuapp.com/heroes';

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    const url = `${this.heroesUrl}`;
    return this.http.get<Hero[]>(url).pipe(
      tap(_ => this.log(`fetched heroes`))
    );
  }

  private log(message: string) {
    console.log('HeroService: ' + message);
  }
}