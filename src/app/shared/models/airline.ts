export interface Airline {
  id: string | number,
  name: string,
  iataCode: string,
  callsign: string,
  fleetSize?: number | string,
  fleetAverageSize?: number | string,
  dateFounded?: number | string,
  countryName: string,
  countryIso2: string
}
