//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario
import React from "react";

function Card(props) {
  return (
    <div className="estiloFondo">
       <h2>Hola {props.nombre}</h2>
      <h2>Tu animal favorito es: {props.animal}</h2>
    </div>
  );
}

export default Card;
