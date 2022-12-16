export interface Usuarios {
  id: string,
  nombre_usuario:string,
  pass:string,
  correo:string,
  auto:boolean,
  carrera:string
}
export interface UsuarioConID extends Usuarios{
  id: string;
}

export interface UsuarioParcial extends Partial <Usuarios>{

}
