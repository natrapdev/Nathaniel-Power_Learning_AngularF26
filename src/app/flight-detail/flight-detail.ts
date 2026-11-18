import { Component, input, computed, inject } from '@angular/core';
import { FlightService } from '../services/flight';
import { Router, RouterLink } from '@angular/router';
import { LoadingService } from '../services/loading/loading-service';
import { DatePipe, TitleCasePipe } from '@angular/common';

@Component({
  imports: [RouterLink, DatePipe, TitleCasePipe],
  selector: 'app-flight-detail',
  styleUrl: './flight-detail.css',
  templateUrl: './flight-detail.html',
})
export class FlightDetail {
  id = input.required<string>();
  private router = inject(Router);

  private openTime = 0;
  private flightInfo = '';

  private service = inject(FlightService);
  loadingService = inject(LoadingService);

  flight = computed(() => this.service.flightList().find((a) => a.id == this.id()));

  goBack(): void {
    this.router.navigate(['flights']);
  }

  ngOnInit() {
    this.openTime = Date.now();
    this.flightInfo = `Flight ID: ${this.id()}`;
    console.log(`[lifecycle] opened: ${this.flightInfo}`);
  }

  ngOnDestroy() {
    const elapsedSeconds = Math.round((Date.now() - this.openTime) / 1000);
    console.log(`[lifecycle] closed: ${this.flightInfo} after ${elapsedSeconds} seconds.`);
  }
}
