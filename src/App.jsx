import { useState } from "react"

export function App() {
  const [numero, setNumero] = useState(100)
  const[mostrarEsconder, setMostrarEsconder] = useState(false)
 
  function aumentar() {
    setNumero(numero + 100)
  }

  function handleMostrarEsconder() {
    if (mostrarEsconder === true) {
      setMostrarEsconder(false)
      return
    }
    setMostrarEsconder(true)
  }

  return(
    <div>
      <h1>Numero: {numero}</h1>

      <div>
        <button onClick= {aumentar}>Aumentar</button>
      </div>

      <div>
       {mostrarEsconder === true ? <p>Parágrafo para esconder</p> : ""}

       <button onClick={handleMostrarEsconder}>{mostrarEsconder===true ? "Esconder" : "Mostrar"}</button>
      </div>
    </div>
  )
}