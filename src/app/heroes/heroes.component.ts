import { Component, OnInit } from '@angular/core';
import { HeroService } from '../shared/services/hero.service';
import { Hero } from '../shared/models/hero.model';

import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import * as HeroActions from '../shared/actions/hero.actions';
import { Observable } from 'rxjs/Observable';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  private heroes: Hero[];
  private heroesContainer: any;
  private heroesObs: Observable<Hero[]>;

  constructor(private heroService: HeroService, private store: Store<AppState>) {
    this.heroes = [];
    store.select('hero').subscribe(datum => {
      this.heroesContainer = datum[0];
      this.heroesHandler();
    });
    this.store.dispatch(new HeroActions.GetHeroes());
  }

  ngOnInit() {
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes;
        this.heroesHandler();
      });
  }

  heroesHandler(): void {
    if (this.heroesContainer && this.heroesContainer.length && this.heroes.length === 0) {
      let tempId = 1;
      this.heroesContainer.forEach(hero => {
        const tempHero = {
          id: tempId,
          name: hero._name,
          nickname: hero._nickname,
          picture: hero._picture,
          height: hero._height
        };
        this.heroes.push(tempHero);
        tempId++;
      });
    }
  }
}
