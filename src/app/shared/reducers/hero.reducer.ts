import { Action } from '@ngrx/store'
import { Hero } from './../models/hero.model'
import * as HeroActions from './../actions/hero.actions'

const initialState: Hero = {
    id: 0,
    name: '',
    picture: '',
    height: 0,
    nickname: ''
}

export function reducer(state: Hero[] = [], action: HeroActions.Actions) {
    switch(action.type) {
        case HeroActions.ADD_HERO:
            return [...state, action.payload];
        case HeroActions.REMOVE_HERO:
            const newstate = [...state];
            return newstate;
        case HeroActions.UPDATE_HERO:
            return [...state, action.payload];
        case HeroActions.GET_HEROES:
            return [...state];
        case HeroActions.GET_HEROES_SUCCESS:
            return [...state, action.payload];
        default:
            return state;
    }
}