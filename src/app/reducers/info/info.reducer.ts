import { Action } from '@ngrx/store';
import { InfoActionTypes, InfoActions } from './info.actions';


export interface State {
  message:string
}

export const initialState: State = {
  message:""
};

export function reducer(state = initialState, action: InfoActions): State {
  switch (action.type) {
    case InfoActionTypes.SetInfo:
      state.message = action.payload;
      return {...state };
    default:
      return state;
  }
}
