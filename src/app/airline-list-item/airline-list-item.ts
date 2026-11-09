import { Component, input, output } from '@angular/core';
import { Airline } from '../shared/models/airline'
import { RouterLink } from '@angular/router';
import { AirlineListItemEvent } from './airline-list-item-event';

@Component({
  imports: [RouterLink],
  selector: 'app-airline-list-item',
  styleUrl: './airline-list-item.css',
  templateUrl: './airline-list-item.html',
})
export class AirlineListItem {
  airline = input.required<Airline>();

  opened = output<AirlineListItemEvent>();

  airlineClicked(): void {
    this.opened.emit({
      id: this.airline().id,
      action: 'opened',
    });
  }
}
