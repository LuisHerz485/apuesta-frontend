export const dataRegistroSolicitudList : IDataRegistroSolicitudList[] = [
    {
        id : 1,
        nroFondes : '0005',
        expHt : '01254-2024',
        denominacion : 'Contenido ABCDEFG',
        monto : 2332.23,
        estado : 'Enviado',
        resultado : ''
    },
    {
        id : 2,
        nroFondes : '0005',
        expHt : '01254-2024',
        denominacion : 'Contenido ABCDEFG',
        monto : 2332.23,
        estado : 'Enviado',
        resultado : ''
    },
    {
        id : 3,
        nroFondes : '0005',
        expHt : '01254-2024',
        denominacion : 'Contenido ABCDEFG',
        monto : 2332.23,
        estado : 'Enviado',
        resultado : ''
    }
]


interface IDataRegistroSolicitudList {
    id : number;
    nroFondes : string;
    expHt : string;
    denominacion : string;
    monto : number;
    estado : string;
    resultado : string;

}