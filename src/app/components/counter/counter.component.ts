import { Component, OnInit, Signal } from "@angular/core";
import { Store } from "@ngrx/store";
import { ButtonModule } from "primeng/button";
import { SignalsService } from "../../services/signals/signals.service";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  standalone: true,
  imports: [ButtonModule],
  styleUrls: ["./counter.component.css"],
})
export class CounterComponent implements OnInit {
  count: Signal<number> = this.signalsService.count;

  constructor(
    private signalsService: SignalsService,
    private store: Store<{ counter: number }>
  ) {}

  ngOnInit() {}

  increaseCount() {
    this.store.dispatch({ type: "[Counter] Increment Count" });
    this.signalsService.incrementCount();
  }

  decreaseCount() {
    this.store.dispatch({ type: "[Counter] Decrement Count" });
    this.signalsService.decrementCount();
  }
}
