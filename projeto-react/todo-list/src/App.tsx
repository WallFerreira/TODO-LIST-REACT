import { Memoization } from "./components/Concepts/Memoization"
import { Header } from "./components/Header/Header"
import { Tasks } from "./components/Tasks/Tasks"

import './styles/global.css'

function App() {

  return (
    <>
      <Header />

      <Tasks />

      <Memoization financialData={{ incomes: [50, 30, 20], outcomes: [5, 8, 4] }} />

    </>)
}

export default App
