import { Action } from '@ngrx/store';
import { Launch } from 'src/app/interfaces/launch';
import { SortMode } from 'src/app/enums/sort-mode.enum';


export enum LaunchActionTypes {
  LoadLaunches = '[Launch] Load',
  LoadLaunchesCompleted = '[Launch] Load completed',
  LoadLaunchesNotCompleted = '[Launch] Load not completed',
  
  SearchLaunches = '[Launch] Search',
  SearchLaunchesCompleted = '[Launch] Search completed',
  SearchLaunchesNotCompleted = '[Launch] Search not completed',

  FindLaunch = '[Launch] Find',
  FindLaunchCompleted = '[Launch] Find completed',
  FindLaunchNotCompleted = '[Launch] Find not completed'
}

export class LoadLaunches implements Action {
  readonly type = LaunchActionTypes.LoadLaunches;
  constructor() {}
}

export class LoadLaunchesCompleted implements Action {
  readonly type = LaunchActionTypes.LoadLaunchesCompleted;
  constructor(public readonly payload: Launch[]) {}
}

export class LoadLaunchesNotCompleted implements Action {
  readonly type = LaunchActionTypes.LoadLaunchesNotCompleted;
  constructor(public readonly payload: string) {}
}

export class SearchLaunches implements Action {
  readonly type = LaunchActionTypes.SearchLaunches;
  constructor(public readonly payload: { mode:SortMode, statusId:number }) {}
}

export class SearchLaunchesCompleted implements Action {
  readonly type = LaunchActionTypes.SearchLaunchesCompleted;
  constructor(public readonly payload: Launch[]) {}
}

export class SearchLaunchesNotCompleted implements Action {
  readonly type = LaunchActionTypes.SearchLaunchesNotCompleted;
  constructor(public readonly payload: string) {}
}

export class FindLaunch implements Action {
  readonly type = LaunchActionTypes.FindLaunch;
  constructor(public readonly payload: number) {}
}

export class FindLaunchCompleted implements Action {
  readonly type = LaunchActionTypes.FindLaunchCompleted;
  constructor(public readonly payload: Launch) {}
}

export class FindLaunchNotCompleted implements Action {
  readonly type = LaunchActionTypes.FindLaunchNotCompleted;
  constructor(public readonly payload: string) {}
}

export type LaunchActions = LoadLaunches | LoadLaunchesCompleted | LoadLaunchesNotCompleted | SearchLaunches | SearchLaunchesCompleted | SearchLaunchesNotCompleted | FindLaunch | FindLaunchCompleted | FindLaunchNotCompleted;
