import { Component, input, computed, inject } from '@angular/core';
import { FlightService } from '../services/flight';
import { Router, RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-flight-detail',
  styleUrl: './flight-detail.css',
  templateUrl: './flight-detail.html',
})
export class FlightDetail {
  id = input.required<string>();
  private router = inject(Router);

  private service = inject(FlightService);

  flight = computed(() =>
    this.service.flightList().find((a) =>
      a.id == this.id())
  );

  goBack(): void {
    this.router.navigate(['flights']);
  }
}
