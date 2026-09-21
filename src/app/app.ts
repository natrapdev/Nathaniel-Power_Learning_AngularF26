import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Airline } from './shared/models/airline';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Nathaniel-Power-Learning-AngularF26');
  favNumber : number = 6;
  countryName : string = "Canada";

  airlineList: Airline[] = [
    { id: 1, name: "Air Canada", iataCode: "AC", callsign: "AIR CANADA", fleetSize: 210, countryName: "Canada", countryIso2: "CA" },
    { id: 2, name: "Delta Airlines", iataCode: "DL", callsign: "DELTA", fleetSize: "1004", countryName: "United States", countryIso2: "US"},
    { id: 3, name: "Cathay Pacific", iataCode: "CX", callsign: "CATHAY", countryName: "Hong Kong", countryIso2: "HK" },
    { id: 4, name: "Cebu Pacific", iataCode: "5J", callsign: "CEBU AIR", countryName: "Philippines", countryIso2: "PH" },
    { id: 6, name: "WestJet", iataCode: "WS", callsign: "WESTJET", countryName: "Canada", countryIso2: "CA" }
  ]
}
