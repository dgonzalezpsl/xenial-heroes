import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Hero } from '../shared/models/hero.model';
import { AppState } from './../app.state';
import * as HeroActions from './../shared/actions/hero.actions';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})

export class HeroComponent implements OnInit {
  heroes: any;
  selectedHero: Hero;
  selectedIndex: number;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private store: Store<AppState>) { 
    store.select('hero').subscribe(data => {
      this.heroes = data[0];
    });
    this.selectedHero = {
      id: 0,
      name: '',
      nickname: '',
      height: 0,
      picture: ''
    };
  }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = this.route.snapshot.paramMap.get('id');
    var BreakException = {};
    try {
      let counter = 0;
      this.heroes.forEach(hero => {
        if (hero._name === id) {
          this.selectedHero = Object.create(hero);
          this.selectedIndex = counter;
          throw BreakException;
        }
        counter++;
      });
    } catch (e) {
      if (e !== BreakException) throw e;
    }
  }

  goBack(): void {
    this.location.back();
  }

  saveHero(): void {
    this.store.dispatch(new HeroActions.RemoveHero(this.selectedIndex));
    this.store.dispatch(new HeroActions.AddHero(this.selectedHero));
    this.heroes[this.selectedIndex] = this.selectedHero;
    this.goBack();
  }
}
