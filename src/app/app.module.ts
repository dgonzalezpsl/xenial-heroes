import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeroesComponent} from './heroes/heroes.component';
import { HeroComponent } from './hero/hero.component';


import { AppRoutingModule }     from './app-routing.module';

import { HeroService } from './shared/services/hero.service';

import { StoreModule } from '@ngrx/store';
import { reducer } from './shared/reducers/hero.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      hero: reducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [ HeroService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
