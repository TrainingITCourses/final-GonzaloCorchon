import { Action } from '@ngrx/store';

import { StatusActions, StatusActionTypes } from './status.actions';
import { Status } from 'src/app/interfaces/status';


export interface State {
  statuses:Status[],
  message?:string,
  loading:boolean
}

export const initialState: State = {
  statuses: [],
  loading: false
};

export function reducer(state = initialState, action: StatusActions): State {
  switch (action.type) {
    case StatusActionTypes.LoadStatuses:
      state.loading = true;
      return {...state };
    case StatusActionTypes.StatusesLoaded:
      state.loading = false;
      state.statuses = action.payload;
      state.message = "";
      return {...state };
    case StatusActionTypes.StatusesNotLoaded:
      state.loading = false;
      state.statuses = [];
      state.message = action.payload;
      return { ...state };
    default:
      return state;
  }
}
