import "./styles.css";
import {Button} from "react-bootstrap"

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";

import cartasData from "./cards.json"

export default function App() {

  const [puntosCrupiert,setPuntosCrupier] = useState(0)
  const [puntosJugador,setPuntosJugador] = useState(0)

  const [cartaCrupier, setCartaCrupier] = useState([])
  const [cartaJugador, setCartaJugador] = useState([])
  const [cartasArray, setCartas] = useState([])

  const cartas = cartasData

  console.log(cartas);
  

  useEffect(() => {
    setCartas(cartasData)
    cartas.push(cartasData)
  },[]);

function restart() {

    setPuntosCrupier(0)
    setPuntosJugador(0)
    setCartaCrupier([])
    setCartaJugador([])
    setCartas({...cartas})
    console.log(cartasArray);

  console.log(cartasArray);
  
  
  }

  function nuevaCarta(cartasArray) {

    var arrayNumberCrupier = Math.floor(Math.random()* cartasArray.length) + 0
    var arrayNumberJugador = Math.floor(Math.random()* cartasArray.length) + 0

    if(cartasArray.length>0 && arrayNumberCrupier !== arrayNumberJugador){

  
    setCartaCrupier(cartasArray[arrayNumberCrupier])
    setPuntosCrupier(puntosCrupiert + cartasArray[arrayNumberCrupier].value)


    setCartaJugador(cartasArray[arrayNumberJugador])
    setPuntosJugador(puntosJugador + cartasArray[arrayNumberJugador].value)
    
    cartasArray.splice(arrayNumberCrupier,1)
    console.log(cartasArray)
    cartasArray.splice(arrayNumberJugador,1)

    console.log(cartasArray)
  }else{
    alert("No quedan cartas")
  }
  
  }


  return (
    <div className="App">
      <h1>BlackJack</h1>
      <section>
        <h2>Crupier</h2>
        <h4>{puntosCrupiert}</h4>
      </section>
      <section>
        <h4>{`${cartaCrupier.value} de ${cartaCrupier.name}`}</h4>
      </section>
      <section>
        <h2>Jugador</h2>
        <h4>{puntosJugador}</h4>
      </section>
      <section>
        <h4>{`${cartaJugador.value} de ${cartaJugador.name}`}</h4>
      </section>
      <section>
      <Button className="btn btn-primary" onClick={()=>nuevaCarta(cartasArray)}>Pedir Carta</Button>
      <Button className="btn btn-success" onClick={()=>restart()}>Nueva Partida</Button>
      </section>
  </div>
  );
}
