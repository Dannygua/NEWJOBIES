export interface Producto {
    productos:
    {
        disponible: boolean,
        _id : string, 
        nombre: string,
        precioUni: DoubleRange,
    },
    conteo: number
}