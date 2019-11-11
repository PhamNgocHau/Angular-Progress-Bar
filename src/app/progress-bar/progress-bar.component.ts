import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  @Input()
  backgroundColor = '#d9d9d9';
  @Input()
  progressColor = 'blue';
  @Input()
  width = 70;
  constructor() { }

  ngOnInit() {
  }

}
