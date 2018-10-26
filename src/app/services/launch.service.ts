import { Injectable } from '@angular/core';
import { Launch } from '../interfaces/launch';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { SortMode } from '../enums/sort-mode.enum';

@Injectable({
  providedIn: 'root'
})
export class LaunchService {

  private launches: Launch[];

  constructor(private http:HttpClient) { }

  public getLaunches() : Observable<Launch[]>{
    if(this.launches) return of(this.launches);
    
    return this.http.get("../../assets/launchlibrary.json")
              .pipe(
                map((res: any) => res.launches),
                tap((res) => this.launches = res)
              );
  }

  private sortFn(sortMode:SortMode){
       let factor:number = sortMode == SortMode.Ascending ? 1 : -1;
       
       return function(a:Launch, b:Launch) {
          if (a.isostart < b.isostart) return -1 * factor;
          if (a.isostart > b.isostart) return 1 * factor;
          return 0;
       };
  }

  public search(statusId:number, sortMode:SortMode) : Observable<Launch[]>{
    return this.getLaunches().pipe(map(launches => launches.filter( launch => launch.status == statusId ).sort(this.sortFn(sortMode))));
  }

  public get(launchId:number) : Observable<Launch>{
    
    return this.getLaunches().pipe(map(launches => launches.filter( launch => launch.id == launchId )[0]));
  }
}
