import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { ToastModule } from "primeng/toast";
import { AppComponent } from "./app.component";
import { CounterComponent } from "./components/counter/counter.component";
import { WatcherComponent } from "./components/watcher/watcher.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CounterComponent, WatcherComponent, ToastModule],
  exports: [ToastModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
