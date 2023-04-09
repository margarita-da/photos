import type { Reducer } from 'react';
import { combineReducers } from '@reduxjs/toolkit';
import { reducers as authReducers } from 'modules/auth/store';
import { reducers as albumsReducers } from 'modules/albums/store';

export function createReducer() {
  return combineReducers({ ...authReducers, ...albumsReducers });
}

export const rootReducer = createReducer();
