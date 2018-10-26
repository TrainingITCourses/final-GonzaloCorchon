import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Launch } from 'src/app/interfaces/launch';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-launch-view',
  templateUrl: './launch-view.component.html',
  styleUrls: ['./launch-view.component.css']
})
export class LaunchViewComponent implements OnInit {
  
  @Input() launch:Launch;
  
  constructor() { }

  ngOnInit() {
  }

}
