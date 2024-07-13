import { IColumnTable } from "@/app/core/models/interfaces/global/columnsTable.interface";

export const COLUMNS_FLIGHT_NAME: IColumnTable[] = [
    { name : 'COD. VUELO', field : 'flightNumber'},
    { name : 'PARTIDA', field : 'departure'},
    { name : 'FECHA PARTIDA', field : 'departureTime'},
    { name : 'DESTINO', field : 'arrival'},
    { name : 'FECHA DESTINO', field : 'arrivalTime'},


];


