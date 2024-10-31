import { Component } from '@angular/core';

@Component({
  selector: 'app-subtract',
  templateUrl: './subtract.component.html',
  styleUrls: ['./subtract.component.css']
})
export class SubtractComponent {
  value1: number = 0;
  value2: number = 0;
  result: number = 0;

  subtract() {
    this.result = this.value1 - this.value2;
  }
}
