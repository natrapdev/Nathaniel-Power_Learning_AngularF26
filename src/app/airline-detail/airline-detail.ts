import { Component, input, computed, inject } from '@angular/core';
import { AirlineService } from '../services/airline';

@Component({
  imports: [],
  selector: 'app-airline-detail',
  styleUrl: './airline-detail.css',
  templateUrl: './airline-detail.html',
})
export class AirlineDetail {
  id = input.required<string>();

  private service = inject(AirlineService);

  airline = computed(() =>
    this.service.airlineList().find(a => a.id === Number(this.id()))
  );
}
