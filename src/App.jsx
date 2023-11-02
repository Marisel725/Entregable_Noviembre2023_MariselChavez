import { useState } from "react";
import Card from "./components/Card";
import './App.css';
import MensajeError from "./components/MensajeError";

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [nombre, setNombre] = useState("");
  const [animal, setAnimal] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [mostrarCard, setMostrarCard] = useState(false);


  const handleSubmit = e => {
    e.preventDefault()


if (nombre.trim().length < 3 || nombre.trim() !== nombre) {
  setMensaje ("Por favor chequea que la información sea correcta.");
  setMostrarCard("");
  setNombre("");
 
}

else if (animal.length < 6) {
  setMensaje ("Por favor chequea que la información sea correcta.")
  setMostrarCard("");
  setAnimal("")
  
}
  
else {
  setMostrarCard(<Card nombre={nombre} animal={animal} />);
  setMensaje("");
}



  };

  


  return (
    <div className="App">
      <h1>CUAL ES TU ANIMAL FAVORITO?</h1>
      <form
      onSubmit={handleSubmit}>

        <div>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" 
        placeholder="Ingrese su nombre"
        id="nombre"
        value={nombre}
        onChange={e=>setNombre(e.target.value)}/>

         </div>

         <div>
         <label htmlFor="animal">Animal favorito:</label>
        <input type="text" 
        placeholder="Ingrese su animal favorito"
        id="animal"
        value={animal}
        onChange={e=>setAnimal(e.target.value)}/>

         </div>

        <div>
         <button type="submit">Enviar</button> 
         </div>
        
         
         
      </form>

      <MensajeError mensajeDeError={mensaje}/>

     
    <div className="App">

      {mostrarCard}

      </div>

      

    
    

      

      </div>
  );
}
    

export default App;
