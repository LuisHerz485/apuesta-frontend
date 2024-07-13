export interface ISeat {
    id : number;
    codSeat : string;
    idFlight : number;
    idCustomer : number;
    status : number;
    price : number;
    dateReservation : string;
    paidSeat : string
}

export interface SeatMapState {
    selectedSeats : any[],
    totalAmount : number;
}


