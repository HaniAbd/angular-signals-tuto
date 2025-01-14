import { Component, computed, effect, signal, Signal } from "@angular/core";
import { MessageService } from "primeng/api";
import { ButtonModule } from "primeng/button";
import { ToastModule } from "primeng/toast";
import { SignalsService } from "../../services/signals/signals.service";

@Component({
  selector: "app-watcher",
  templateUrl: "./watcher.component.html",
  standalone: true,
  styleUrls: ["./watcher.component.css"],
  imports: [ButtonModule, ToastModule],
  providers: [MessageService],
})
export class WatcherComponent {
  count: Signal<number> = this.signalsService.count;
  quantity = signal(1);
  pricePerItem = signal(10);

  // Define computed signals
  totalPrice = computed(() => this.quantity() * this.pricePerItem());

  constructor(
    private signalsService: SignalsService,
    private messageService: MessageService
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
