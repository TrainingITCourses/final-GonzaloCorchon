import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { LaunchActionTypes, SearchLaunches, SearchLaunchesCompleted, SearchLaunchesNotCompleted, LoadLaunches, LoadLaunchesCompleted, LoadLaunchesNotCompleted, FindLaunch, FindLaunchCompleted, FindLaunchNotCompleted } from './launch.actions';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { LaunchService } from '../../services/launch.service';
import { of } from 'rxjs';


@Injectable()
export class LaunchEffects {

  @Effect()
  public search$ = this.actions$.ofType(LaunchActionTypes.SearchLaunches)
  .pipe(
    mergeMap((action: SearchLaunches) => this.launchService.search(action.payload.statusId, action.payload.mode).pipe(
      map(launches => new SearchLaunchesCompleted(launches)),
      catchError( err => of(new SearchLaunchesNotCompleted("Search could not be completed")))
    ))
  );

  @Effect()
  public load$ = this.actions$.ofType(LaunchActionTypes.LoadLaunches)
  .pipe(
    mergeMap((action: LoadLaunches) => this.launchService.getLaunches().pipe(
      map(launches => new LoadLaunchesCompleted(launches)),
      catchError( err => of(new LoadLaunchesNotCompleted("Load could not be completed")))
    ))
  );

  @Effect()
  public find$ = this.actions$.ofType(LaunchActionTypes.FindLaunch)
  .pipe(
    mergeMap((action: FindLaunch) => this.launchService.get(action.payload).pipe(
      map(launch => new FindLaunchCompleted(launch)),
      catchError( err => of(new FindLaunchNotCompleted("Find could not be completed")))
    ))
  );

  constructor(private actions$: Actions, private launchService: LaunchService) {}
}
