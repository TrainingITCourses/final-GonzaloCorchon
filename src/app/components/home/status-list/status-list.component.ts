import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Status } from 'src/app/interfaces/status';

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusListComponent implements OnInit {

  @Input() statuses:Status[];

  constructor() { }
  
  ngOnInit() {
  
  }

}
