import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { Status } from 'src/app/interfaces/status';
import { SetInfo } from 'src/app/reducers/info/info.actions';
import { Subscription } from 'rxjs';
import { LoadStatuses } from 'src/app/reducers/status/status.actions';
import { LoadLaunches } from 'src/app/reducers/launch/launch.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  statuses:Status[] = [];
  
  statusSubscription:Subscription;
  launchSubscription:Subscription;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.statusSubscription = this.store.select('status').subscribe( data => {
      this.statuses = data.statuses;
    });

    this.launchSubscription = this.store.select('launch').subscribe( data => {
      this.store.dispatch(new SetInfo( data.launches.length + " launches" ));
    });

    this.store.dispatch(new LoadStatuses());
    this.store.dispatch(new LoadLaunches());
  }

  ngOnDestroy() {
    this.statusSubscription.unsubscribe();
    this.launchSubscription.unsubscribe();
  }
}
