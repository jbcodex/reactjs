
//CSS
import './App.css'

//React
import { useCallback, useEffect, useState } from 'react'

//Data
import {wordsList} from "./data/words"

//Components
import StartScreen from './components/StartScreen'


//Definindo os estágios do jogo
const stages = [
  { id:1, name:"start" },
  { id:2, name:"game" },
  { id:3, name:"end" }
];

function App() {
  //Definindo o estado do GameStage
  const [gameStage, setGameStage] = useState(stages[0])
  
  

  return (
    <>
      <div className="App">
         {gameStage === "start" &&  <StartScreen />}
         {gameStage === "start" &&  <StartScreen />}
         {gameStage === "start" &&  <StartScreen />}
         
         
      </div>
    </>
  )
}

export default App
