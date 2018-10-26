import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  //changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-info-bar',
  templateUrl: './info-bar.component.html',
  styleUrls: ['./info-bar.component.css']
})
export class InfoBarComponent implements OnInit {

  @Input() data:{ message: string };
  
  constructor() { }

  ngOnInit() {
    
  }

}
