import { Component, input, output } from '@angular/core';
import { Airline } from '../shared/models/airline'

@Component({
  imports: [],
  selector: 'app-airline-list-item',
  styleUrl: './airline-list-item.css',
  templateUrl: './airline-list-item.html',
})

export class AirlineListItem {
  airline = input.required<Airline>();

  opened = output<ContentEvent>();

  airlineClicked(): void {
    this.opened.emit({
      id: this.airline().id,
      action: 'opened'
    });
  }
}

export interface ContentEvent {
  id: string | number,
  action: 'opened';
}
