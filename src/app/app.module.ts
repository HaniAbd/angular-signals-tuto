import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { WatcherComponent } from './components/watcher/watcher.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CounterComponent,
    WatcherComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
