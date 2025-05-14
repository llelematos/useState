import { useState } from "react"

export function App() {
  const [numero, setNumero] = useState(100)

  function diminuir() {
    setNumero(numero - 100)
  }

  function aumentar() {
    setNumero(numero + 100)
  }
  return(
    <div>
      <h1>Numero: {numero}</h1>

      <div>
        <button onClick= {diminuir}>Diminuir</button>
        <button onClick= {aumentar}>Aumentar</button>
      </div>
    </div>
  )
}