export interface Producto {
  nombreusuario?: string,
  auto: string,
  destino: string,
  puestos: number,
  patente:string ,
  detalles: string,
  costoviaje:number,
  results: Array<Producto>,
}

export interface ProductoConId extends Producto{
  id : string;
}
export interface ProductoParcial extends Partial <Producto>{

}
