import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs/operators";
import { dynamicData } from "./counter.action";

@Injectable()
export class CounterEffect {
  // Define effects here if needed
  // For example, you can listen to actions and perform side effects
  // using the ngrx/effects library.

  saveCount = createEffect(
    () =>
      this.actions$.pipe(
        ofType(dynamicData),
        tap((action) => {
          // Here you can perform side effects like saving the count to a server
          console.log(`Count action dispatched: ${action.type}`);
        })
      ),
    { dispatch: false } // Set to false if you don't want to dispatch a new action
  );

  constructor(private actions$: Actions) {}
}
