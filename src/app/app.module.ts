import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeroesComponent} from './heroes/heroes.component';
import { HeroComponent } from './hero/hero.component';


import { AppRoutingModule }     from './app-routing.module';

import { HeroService } from './shared/services/hero.service';

import { StoreModule } from '@ngrx/store';
import { reducer } from './shared/reducers/hero.reducer';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      hero: reducer
    })
  ],
  providers: [ HeroService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
