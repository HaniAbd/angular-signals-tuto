import { Component, Signal } from '@angular/core';
import { SignalsService } from '../../services/signals/signals.service';

@Component({
  selector: 'app-watcher',
  templateUrl: './watcher.component.html',
  standalone: true,
  styleUrls: ['./watcher.component.css']
})
export class WatcherComponent {
  count: Signal<number> = this.signalsService.count;

  constructor(private signalsService: SignalsService) {
  }

}
