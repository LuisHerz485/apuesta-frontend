import { createReducer, on } from '@ngrx/store';
import { initialSeatState } from '../states/seat.state';
import { addSeat, removeSeat } from '../actions/seat.actions';

export const seatReducer = createReducer(
  initialSeatState,
  on(addSeat, (state, { seat }) => ({
    ...state,
    selectedSeats: [...state.selectedSeats, seat],
  })),
  on(removeSeat, (state, { codSeat }) => ({
    ...state,
    selectedSeats: state.selectedSeats.filter(seat => seat.codSeat !== codSeat),
  }))
);
