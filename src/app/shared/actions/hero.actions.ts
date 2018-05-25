import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Hero } from './../models/hero.model';

export const ADD_HERO       = '[HERO] Add';
export const REMOVE_HERO    = '[HERO] Remove';
export const UPDATE_HERO    = '[HERO] Update';
export const GET_HEROES     = '[HERO] Get Heroes';
export const GET_HEROES_SUCCESS     = '[HERO] Get Heroes Success';

export class AddHero implements Action {
    readonly type = ADD_HERO
    constructor(public payload: Hero) {}
}

export class RemoveHero implements Action {
    readonly type = REMOVE_HERO
    constructor(public payload: number) {}
}

export class UpdateHeroe implements Action {
    readonly type = UPDATE_HERO;
    constructor(public payload: Hero) {}
}

export class GetHeroes implements Action {
    readonly type =  GET_HEROES;
    payload = '';
}

export class GetHeroesSuccess implements Action {
    readonly type =  GET_HEROES_SUCCESS;
    constructor(public payload: any) {}
}

export type Actions = AddHero | RemoveHero | UpdateHeroe | GetHeroes | GetHeroesSuccess
