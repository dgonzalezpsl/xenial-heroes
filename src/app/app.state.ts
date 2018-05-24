import { Hero } from './shared/models/hero.model';

export interface AppState {
  readonly hero: Hero[];
}