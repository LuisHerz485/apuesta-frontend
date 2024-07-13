export interface Seat {
    id : number;
    codSeat: string;
    price: number;
  }
  
  export interface SeatState {
    selectedSeats: Seat[];
  }
  
  export const initialSeatState: SeatState = {
    selectedSeats: [],
  };
  