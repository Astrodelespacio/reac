import React from "react";
import './menu.css'

const Imenu = () =>{
    return(
        <div className="encabezadoMenu">
          <img src="./img/OIP.jpg" className="img" alt="imagen"/>
          <div className="Lista">
           <ul className="ul-lista">
            <li><a href="">Inicio</a></li>
            <li><a href="">Quienes somos</a></li>
            <li><a href="">Productos y Servicios</a></li>
            <li><a href="">Contacto</a></li>
           </ul>

          </div>
        </div>
    )
}

export default Imenu