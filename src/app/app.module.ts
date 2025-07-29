import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { StoreModule } from "@ngrx/store";

import { EffectsModule } from "@ngrx/effects";
import { ToastModule } from "primeng/toast";
import { AppComponent } from "./app.component";
import { CounterComponent } from "./components/counter/counter.component";
import { WatcherComponent } from "./components/watcher/watcher.component";
import { CounterEffect } from "./counter-store/counter.effect";
import {
  counterReducer,
  dynamicDataReducer,
} from "./counter-store/counter.reducer";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CounterComponent,
    WatcherComponent,
    ToastModule,
    StoreModule.forRoot({
      counter: counterReducer,
      dynamicData: dynamicDataReducer,
      // Add other reducers here if needed
    }),
    EffectsModule.forRoot([CounterEffect]),
  ],
  exports: [ToastModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
