// Section 1
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Hero } from './../models/hero.model'

// Section 2
export const ADD_HERO       = '[HERO] Add'
export const REMOVE_HERO    = '[HERO] Remove'

// Section 3
export class AddHero implements Action {
    readonly type = ADD_HERO

    constructor(public payload: Hero) {}
}

export class RemoveHero implements Action {
    readonly type = REMOVE_HERO

    constructor(public payload: number) {}
}

// Section 4
export type Actions = AddHero | RemoveHero