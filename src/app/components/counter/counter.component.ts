import { Component, OnInit } from '@angular/core';
import { SignalsService } from '../../services/signals/signals.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count = this.signalsService.count;
  constructor(private signalsService: SignalsService) {}

  ngOnInit() {}

  decreaseCount() {
    this.signalsService.decrementCount();
  }

  increaseCount() {
    this.signalsService.incrementCount();
  }
}
