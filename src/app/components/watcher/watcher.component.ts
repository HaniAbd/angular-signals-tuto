import { AsyncPipe, JsonPipe } from "@angular/common";
import { Component, computed, effect, signal, Signal } from "@angular/core";
import { Store } from "@ngrx/store";
import { MessageService } from "primeng/api";
import { ButtonModule } from "primeng/button";
import { ToastModule } from "primeng/toast";
import { Observable } from "rxjs";
import { SignalsService } from "../../services/signals/signals.service";

@Component({
  selector: "app-watcher",
  templateUrl: "./watcher.component.html",
  standalone: true,
  styleUrls: ["./watcher.component.css"],
  imports: [ButtonModule, ToastModule, AsyncPipe, JsonPipe],
  providers: [MessageService],
})
export class WatcherComponent {
  count: Signal<number> = this.signalsService.count;
  quantity = signal(1);
  pricePerItem = signal(10);

  count$: Observable<number>;
  data$: Observable<any>;

  // Define computed signals
  totalPrice = computed(() => this.quantity() * this.pricePerItem());

  constructor(
    private signalsService: SignalsService,
    private messageService: MessageService,
    private store: Store<{ counter: number; dynamicData: any }>
  ) {
    effect(() => {
      const total = this.totalPrice();
      if (total > 50) {
        this.messageService.add({
          severity: "warn",
          summary: "Warn",
          detail: `Total price exceeds limit: ${total}`,
        });
      } else {
        this.messageService.add({
          severity: "success",
          summary: "Success",
          detail: `Current total price: ${total}`,
        });
      }
    });

    this.count$ = this.store.select("counter");
    this.data$ = this.store.select("dynamicData");
  }
  decreaseQty() {
    this.quantity.set(this.quantity() - 1);
  }
  increaseQty() {
    this.quantity.set(this.quantity() + 1);
  }

  // Update methods
  updateQuantity(qty: number) {
    this.quantity.set(qty);
  }

  updatePrice(price: number) {
    this.pricePerItem.set(price);
  }
}
