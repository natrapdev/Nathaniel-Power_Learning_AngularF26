import { Component, input } from '@angular/core';
import { Airline } from '../shared/models/airline'

@Component({
  imports: [],
  selector: 'app-airline-list-item',
  styleUrl: './airline-list-item.css',
  templateUrl: './airline-list-item.html',
})
export class AirlineListItem {
  airline = input.required<Airline>();
}
