/* eslint-disable no-unused-vars */
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


//Definindo variáveis para a escolha das categorias e palavras
  const [pickedWord, setPickedWord] = useState();
  const [pickedCategory, setPickCategory] = useState();
  const [letters, setLetters] = useState([])

  //Criando a variável word com os dados da WordsList
  const [words] = useState(wordsList);

  //Escolhendo a catgoria e a palavra
  const pickWordAndCategory = ()=>{
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

  //Escolhendo uma palavra de cada categoria
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    console.log(category)
    console.log(word)
  }

  //Criando a função para iniciar o jogo
  const startGame = ()=>{
    pickWordAndCategory()
    setGameStage(stages[1].name)
  }

  //Processando a letra inserida
  const verifyLetter = ()=>{
    setGameStage(stages[2].name)
    console.log(gameStage)
  }

  //Iniciando novamente o jogo
  const getStart = ()=>{
    setGameStage(stages[0].name)
  } 
  

  return (
    <>
      <div className="App">
         {/*Definindo as condições ternárias para a exibição das telas*/}
         {gameStage === "start" &&  <StartScreen startGame={startGame} />}
         {gameStage === "game" &&  <Game verifyLetter={verifyLetter} />}
         {gameStage === "end" &&  <GameOver getStart={getStart} />}
      </div>
    </>
  )
}

export default App
