import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SignalsService {
  count = signal<number>(0); // WritableSignal for count

  incrementCount() {
    this.count.update((count) => count + 1);
  }

  decrementCount() {
    this.count.update((count) => count - 1);
  }
}
