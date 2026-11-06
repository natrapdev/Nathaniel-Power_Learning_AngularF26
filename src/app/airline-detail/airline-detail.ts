import { Component, input, computed, inject } from '@angular/core';
import { AirlineService } from '../services/airline';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-airline-detail',
  styleUrl: './airline-detail.css',
  templateUrl: './airline-detail.html',
})
export class AirlineDetail {
  id = input.required<string>();
  private router = inject(Router);

  private service = inject(AirlineService);

  airline = computed(() =>
    this.service.airlineList().find(a => a.id === Number(this.id()))
  );

  goBack(): void {
    this.router.navigate(['/airlines']);
  }
}
