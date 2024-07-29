import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { ButtonModule } from 'primeng/button';
import { WatcherComponent } from './components/watcher/watcher.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    WatcherComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
