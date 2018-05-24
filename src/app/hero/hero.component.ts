import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Hero } from '../shared/models/hero.model';
import { AppState } from './../app.state';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})

export class HeroComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private store: Store<AppState>) { 
    store.select('hero').subscribe(data => {
      this.heroes = data;
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
    const id = +this.route.snapshot.paramMap.get('id');
    var BreakException = {};
    try {
      this.heroes.forEach(hero => {
        if (hero.id === id) {
          this.selectedHero =  hero;
          throw BreakException;
        }
      });
    } catch (e) {
      if (e !== BreakException) throw e;
    }
  }

  goBack(): void {
    this.location.back();
  }
}
