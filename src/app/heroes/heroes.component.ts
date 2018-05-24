import { Component, OnInit } from '@angular/core';
import { HeroService } from '../shared/services/hero.service';
import { Hero } from '../shared/models/hero.model';

import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import * as HeroActions from '../shared/actions/hero.actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  private heroes: Hero[];
  private heroesObs: Observable<Hero[]>;

  constructor(private heroService: HeroService, private store: Store<AppState>) { 
    store.select('hero').subscribe(data => {
      this.heroes = data;
    });
  }

  ngOnInit() {
    // if(this.heroes.length < 1){
    //   this.getHeroes();
    // }
    this.store.dispatch(new HeroActions.GetHeroes());
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes;
        this.heroesHandler();
      });
  }

  heroesHandler(): void {
    let tempId = 1;
    this.heroes.forEach(hero => {
      hero.id = tempId;
      this.store.dispatch(new HeroActions.AddHero(hero));
      tempId++;
    });
  }
}
