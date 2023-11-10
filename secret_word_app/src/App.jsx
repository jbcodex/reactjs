
//CSS
import './App.css'

//React
import { useCallback, useEffect, useState } from 'react'

//Data
import {wordsList} from "./data/words"

//Components
import StartScreen from './components/StartScreen'
import Game from './components/Game';
import GameOver from './components/GameOver';


//Definindo os estágios do jogo
const stages = [
  { id:1, name:"start" },
  { id:2, name:"game" },
  { id:3, name:"end" }
];

function App() {
  //Definindo o estado do GameStage
  const [gameStage, setGameStage] = useState(stages[0].name)

  //Importando a WordsList
  const [words] = useState(wordsList);

  //Criando a função para iniciar o jogo
  const startGame = ()=>{
    setGameStage(stages[1].name)
  }

  //Processando a letra inserida
  const verifyLetter = ()=>{
    setGameStage(stages[2].name)
    console.log(gameStage)
  }
  
  
  

  return (
    <>
      <div className="App">
         {/*Definindo as condições ternárias para a exibição das telas*/}
         {gameStage === "start" &&  <StartScreen startGame={startGame} />}
         {gameStage === "game" &&  <Game verifyLetter={verifyLetter}/>}
         {gameStage === "end" &&  <GameOver />}
         
         
         
      </div>
    </>
  )
}

export default App
