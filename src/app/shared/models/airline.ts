export interface Airline {
  id: string | number,
  name: string | null,
  type: string | null,
  iataCode: string | null,
  callsign: string | null,
  fleetSize?: number | string | null,
  fleetAverageSize?: number | string | null,
  dateFounded?: number | string | null,
  countryName: string | null,
  countryIso2: string | null
}
