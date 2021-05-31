import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,

} from '@ngrx/store';
import { IAppState } from '../model/appModel';
import { BaseAction, STORAGE } from '../actions/base.actions';

import { homeReducer } from './home.reducer';


export const metaReducers: MetaReducer<IAppState, BaseAction>[] = [];

export const reducers: ActionReducerMap<IAppState, BaseAction> = {

  homeState:homeReducer

};
