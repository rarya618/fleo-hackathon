import { Component } from '@angular/core';
import * as data from './data.json';

import { progress } from './progress';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './main.css']
})

export class AppComponent {
  processData() {
    return data;
  }

  progress(current: number, target: number) {
    return progress(current, target);
  }

  title = 'fleo-app';
}
