import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { ActivatedRoute } from '@angular/router';
import { Launch } from 'src/app/interfaces/launch';
import { FindLaunch } from 'src/app/reducers/launch/launch.actions';
import { SetInfo } from 'src/app/reducers/info/info.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-launch-page',
  templateUrl: './launch-page.component.html',
  styleUrls: ['./launch-page.component.css']
})
export class LaunchPageComponent implements OnInit {

  launch:Launch;
  subscription:Subscription;

  constructor(private store: Store<State>, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.store.select('launch').subscribe( data => {
      this.launch = data.launch;
      this.store.dispatch(new SetInfo(data.launch != null ? data.launch.name : ""));
     
    });
    
    this.store.dispatch(new FindLaunch( this.activatedRoute.snapshot.params['id'] ));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
