import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count = signal(0);
  constructor() { }

  ngOnInit() {
  }

  decreaseCount() {
    this.count.set(this.count() - 1);
  }

  increaseCount() {
    this.count.set(this.count() + 1);
  }
}
