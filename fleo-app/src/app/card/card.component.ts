import { Component, OnInit, Input } from '@angular/core';

import { progress } from '../progress';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css', '../main.css']
})

export class CardComponent {
  @Input() name: string = "";
  @Input() id: string = "";
  @Input() level: number = 0;
  @Input() currentSales: number = 0;
  @Input() targetSales: number = 0;
  @Input() children: any[] = [];

  progress(current: number, target: number) {
    return progress(current, target);
  }

  labels: string[] = ["At risk", "Off track", "On track"];

  processProgress(progress: number) {
    if (progress <= 0.33) {
      return {color: "red", label: "At risk"}
    } else if (progress > 0.66) {
      return {color: "green", label: "On track"}
    } else {
      return {color: "yellow", label: "Off track"}
    }
  }

  constructor() {}

}
