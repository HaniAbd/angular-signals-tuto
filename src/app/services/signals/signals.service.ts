import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalsService {
  private _count = signal<number>(0);  // WritableSignal for count

  get count() {
    return this._count.asReadonly();  // Return a read-only signal
  }

  incrementCount() {
    this._count.update((count) => count + 1);
  }

  decrementCount() {
    this._count.update((count) => count - 1);
  }
}
