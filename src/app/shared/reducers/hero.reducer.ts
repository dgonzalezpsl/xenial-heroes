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
            state.splice(action.payload, 1)
            return state;
        case HeroActions.UPDATE_HERO:
            return [...state, action.payload];
        default:
            return state;
    }
}