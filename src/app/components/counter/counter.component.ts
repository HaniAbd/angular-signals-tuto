import { Component, OnInit, signal, effect } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count = signal(0);
  constructor() {
    effect(() => {
      console.log(`The current count is: ${this.count()}`);
    });
  }

  ngOnInit() {
  }

  decreaseCount() {
    this.count.set(this.count() - 1);
  }

  increaseCount() {
    this.count.set(this.count() + 1);
  }
}
