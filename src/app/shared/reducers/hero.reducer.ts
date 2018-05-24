import { Action } from '@ngrx/store'
import { Hero } from './../models/hero.model'
import * as HeroActions from './../actions/hero.actions'

// Section 1
const initialState: Hero = {
    id: 0,
    name: '',
    picture: '',
    height: 0,
    nickname: ''
}

// Section 2
export function reducer(state: Hero[] = [initialState], action: HeroActions.Actions) {

    // Section 3
    switch(action.type) {
        case HeroActions.ADD_HERO:
            return [...state, action.payload];
        default:
            return state;
    }
}