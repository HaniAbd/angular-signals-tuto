import { Component, OnInit, Signal } from '@angular/core';
import { SignalsService } from '../../services/signals/signals.service';
import { ButtonModule } from 'primeng/button';
import { WatcherComponent } from '../watcher/watcher.component';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  standalone: true,
  imports: [ButtonModule],
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count: Signal<number> = this.signalsService.count;
  constructor(private signalsService: SignalsService) {}

  ngOnInit() {}

  decreaseCount() {
    this.signalsService.decrementCount();
  }

  increaseCount() {
    this.signalsService.incrementCount();
  }
}
