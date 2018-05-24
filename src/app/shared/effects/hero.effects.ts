import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

import * as heroActions from '../actions/hero.actions';
export type Action = heroActions.Actions;


@Injectable()
export class HeroEffects {
  private heroesUrl = 'https://udem.herokuapp.com/heroes';

  constructor(private actions: Actions, private httpClient: HttpClient) { }

  @Effect()
  getHeroes: Observable<Action> = this.actions.ofType(heroActions.GET_HEROES)
    .map((action: heroActions.GetHeroes) => action.payload)
    .mergeMap(payload => this.httpClient.get(this.heroesUrl))
    .map(data => {
      return new heroActions.GetHeroesSuccess(data);
    });
}