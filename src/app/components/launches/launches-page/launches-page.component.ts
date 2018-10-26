import { Component, OnInit } from '@angular/core';
import { Launch } from 'src/app/interfaces/launch';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { ActivatedRoute } from '@angular/router';

import { SortMode } from 'src/app/enums/sort-mode.enum';
import { SetInfo } from 'src/app/reducers/info/info.actions';
import { SearchLaunches } from 'src/app/reducers/launch/launch.actions';
import { LoadStatuses } from 'src/app/reducers/status/status.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-launches-page',
  templateUrl: './launches-page.component.html',
  styleUrls: ['./launches-page.component.css']
})
export class LaunchesPageComponent implements OnInit {

  launches:Launch[] = [];
  sortMode:SortMode = SortMode.Descending;
  private statusId:number;

  
  launchSubscription:Subscription;
  statusSubscription:Subscription;

  constructor(private store: Store<State>, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.statusId = this.activatedRoute.snapshot.params['id'];

    this.launchSubscription = this.store.select('launch').subscribe( data => {
      this.launches = data.searchResult;
    });
        
    this.statusSubscription = this.store.select('status').subscribe( data => {
      var status = data.statuses.filter(status => status.id == this.statusId)[0];
      this.store.dispatch(new SetInfo( status != null ? status.name : "" ));
    });

    this.store.dispatch(new SetInfo( "" ));
    this.store.dispatch(new SearchLaunches({ statusId: this.statusId, mode: this.sortMode }));
    this.store.dispatch(new LoadStatuses());
  }

  onSortChanged() {
      this.sortMode = this.sortMode == SortMode.Ascending ? SortMode.Descending : SortMode.Ascending;
      this.store.dispatch(new SearchLaunches({ statusId: this.statusId, mode: this.sortMode }));
  }

  ngOnDestroy() {
    this.launchSubscription.unsubscribe();
    this.statusSubscription.unsubscribe();
  }

}
