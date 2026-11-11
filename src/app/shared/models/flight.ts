export interface Flight {
  id?: string | number;
  flight_date: string | null;
  flight_status: string | null;
  departure: {
    airport: string | null;
    iata: string | null;
    scheduled: string | null;
    terminal?: string | null;
  };
  arrival: {
    airport: string | null;
    iata: string | null;
    scheduled: string | null;
    terminal?: string | null;
  };
  airline: {
    name: string | null;
    iata: string | null;
  };
  flight: {
    number: string | null;
    iata: string | null;
  };
}
