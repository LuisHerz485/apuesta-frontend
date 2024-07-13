import { createAction, props } from '@ngrx/store';
import { Seat } from '../states/seat.state';


export const addSeat = createAction(
  '[Seat Map] Add Seat',
  props<{ seat: Seat }>()
);

export const removeSeat = createAction(
  '[Seat Map] Remove Seat',
  props<{ codSeat: string, seatPrice: number }>() 
);
