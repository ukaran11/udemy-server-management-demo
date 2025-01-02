import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
  standalone: true,
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
  private interval?: ReturnType<typeof setInterval>;
  constructor() {}

  ngOnInit() {
    this.interval = setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
