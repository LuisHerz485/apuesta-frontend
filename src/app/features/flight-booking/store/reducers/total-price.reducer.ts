import { createReducer, on } from '@ngrx/store';
import { initialTotalPriceState } from '../states/total-price.state';
import { addSeat, removeSeat } from '../actions/seat.actions';

export const totalPriceReducer = createReducer(
  initialTotalPriceState,
  on(addSeat, (state, { seat }) => ({
    ...state,
    totalPrice: state.totalPrice + seat.price,
  })),
  on(removeSeat, (state, { seatPrice }) => ({
    ...state,
    totalPrice: state.totalPrice - seatPrice,
  }))
);
