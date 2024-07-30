import { Component } from '@angular/core';
import { SignalsService } from '../../services/signals/signals.service';

@Component({
  selector: 'app-watcher',
  templateUrl: './watcher.component.html',
  styleUrls: ['./watcher.component.css']
})
export class WatcherComponent {
  count = this.signalsService.count;

  constructor(private signalsService: SignalsService) {
  }

}
