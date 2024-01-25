// import { useState } from "react"
import { Refs } from "./components/Concepts/Refs"
import { Header } from "./components/Header/Header"
import { Tasks } from "./components/Tasks/Tasks"
// import { Button } from "./components/Button/Button"

import './styles/global.css'

function App() {

  // const [toggle, setToggle] = useState(false)


  // useEffect(() => {
  //   console.log("Executando a função do useEffect...");

  //   return () => {
  //     console.log("essa função vai ser chamada quando o componente for desmotado");

  //   }
  // }, [toggle])

  return (
    <>
      <Header />

      <Tasks />

      <Refs />

    </>)
}

export default App
