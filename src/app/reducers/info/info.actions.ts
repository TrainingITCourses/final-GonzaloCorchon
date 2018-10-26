import { Action } from '@ngrx/store';

export enum InfoActionTypes {
  SetInfo = '[Info] Set Info'
}

export class SetInfo implements Action {
  readonly type = InfoActionTypes.SetInfo;
  constructor(public readonly payload: string) {}
}

export type InfoActions = SetInfo;
