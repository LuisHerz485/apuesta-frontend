import { SEAT_STATUS } from '@/app/core/constants';
import { ISeat } from '@/app/features/flight-booking/interfaces';
import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
interface Seat {
    codSeat: string;
    status: number;
}
@Component({
    selector: 'app-seat-map',
    standalone: true,
    imports: [ButtonModule],
    templateUrl: './seat-map.component.html',
    styleUrl: './seat-map.component.scss',
})
export class SeatMapComponent {
    @Input() seats: ISeat[] = [];
    @Input() maxSelections = signal<number>(0);

    @Output() seatSelected = new EventEmitter<ISeat>();
    @Output() seatDeselected = new EventEmitter<string>();

    rows: number = 20;
    cols: number = 6;
    selectedSeats: Set<string> = new Set();

    public isSelected(seat: string): boolean {
        return this.selectedSeats.has(seat);
    }

    public toggleSeat(codSeat: string): void {
        if (this.isSelected(codSeat)) {
            this.selectedSeats.delete(codSeat);
            this.seatDeselected.emit(codSeat);
        } else if (
            this.selectedSeats.size < this.maxSelections() &&
            !this.isSeatUnavailable(codSeat)
        ) {
            this.selectedSeats.add(codSeat);
            const foundSeat = this.seats.find(
                element => element.codSeat === codSeat,
            );
            this.seatSelected.emit(foundSeat);
        }
    }
    
    public isSeatUnavailable(seatNumber: string): boolean {
        const seat = this.seats.find(s => s.codSeat === seatNumber);
        return (
            !!seat &&
            (seat.status === SEAT_STATUS.PAID ||
                seat.status === SEAT_STATUS.RESERVATION)
        );
    }

    public getSeatLabel(row: number, col: number): string {
        const firstPart = String.fromCharCode(65 + Math.floor(row / 26));
        const secondPart = String.fromCharCode(65 + (row % 26));
        return `${firstPart}${secondPart}${col + 1}`;
    }

    public getRange(count: number): number[] {
        return new Array(count);
    }
}
