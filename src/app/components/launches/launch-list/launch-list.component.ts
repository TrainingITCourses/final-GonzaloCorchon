import { Component, OnInit, Input, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { Launch } from 'src/app/interfaces/launch';
import { SortMode } from 'src/app/enums/sort-mode.enum';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.css']
})
export class LaunchListComponent implements OnInit {
  @Input() launches:Launch[];
  @Input() sortMode:SortMode;
  @Output() sort:EventEmitter<any> = new EventEmitter()
  
  SortMode = SortMode;
  
  constructor() { }

  ngOnInit() {
  }

  sortChanged() : void {
    this.sort.next()
  }
}
