import { Action } from '@ngrx/store';

import { LaunchActions, LaunchActionTypes } from './launch.actions';
import { Launch } from 'src/app/interfaces/launch';


export interface State {
  launches:Launch[];
  searchResult:Launch[];
  launch:Launch;
  message?: string;
}

export const initialState: State = {
  launches: [],
  searchResult: [],
  launch: null,
};

export function reducer(state = initialState, action: LaunchActions): State {
  switch (action.type) {
    case LaunchActionTypes.LoadLaunchesCompleted:
      state.launches = action.payload;
      state.message = null;
      return { ...state };
    case LaunchActionTypes.LoadLaunchesNotCompleted:
      state.launches = [];
      state.message = action.payload;
      return { ...state };

    case LaunchActionTypes.SearchLaunchesCompleted:
      state.searchResult = action.payload;
      state.message = null;
      return { ...state };
    case LaunchActionTypes.SearchLaunchesNotCompleted:
      state.searchResult = [];
      state.message = action.payload;
      return { ...state };

    case LaunchActionTypes.FindLaunchCompleted:
      state.launch = action.payload;
      state.message = null;
      return { ...state };
    case LaunchActionTypes.FindLaunchNotCompleted:
      state.launch = null;
      state.message = action.payload;
      return { ...state };

    default:
      return state;
  }
}
