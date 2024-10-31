import { Component } from '@angular/core';

@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.css']
})
export class SumComponent {
  value1: number = 0;
  value2: number = 0;
  result: number = 0;

  sum() {
    this.result = this.value1 + this.value2;
  }
}
