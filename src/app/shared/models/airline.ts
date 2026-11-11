export interface Airline {
  id: string | number,
  airline_name: string | null,
  type: string | null,
  iata_code: string | null,
  callsign: string | null,
  fleet_size?: number | string | null,
  date_founded?: number | string | null,
  country_name: string | null,
  country_iso2: string | null
}
