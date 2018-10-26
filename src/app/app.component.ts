import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './reducers';
import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'Launches';
  infoMessage:{ message:string };
  
  constructor(private store: Store<State>, private swUpdate: SwUpdate) {
    if(swUpdate.isEnabled){
      swUpdate.available.subscribe((event: UpdateAvailableEvent) => {
          if(confirm("There's a new version available, click accept to reload the browser and get the new one")){
              window.location.reload(true);
          }
      });
    }
  }

  ngOnInit(): void {
    this.store.select('info').subscribe( data => {
      this.infoMessage = { message: data.message };
    });
  }
}
