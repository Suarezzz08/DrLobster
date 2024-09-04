import React from "react"
import Registro_usuario from "../Componentes/Registro_usuario"
import Menu from "../Componentes/Menu"

function Registro(){
  return (
    <div className="header">
      <Menu/>
      <Registro_usuario/>
    </div>
  );
}

export default Registro