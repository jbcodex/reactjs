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
  const [words] = useState(wordsList);


//Definindo variáveis para a escolha das categorias e palavras
  const [pickedWord, setPickedWord] = useState();
  const [pickedCategory, setPickCategory] = useState();
  const [letters, setLetters] = useState([])

  const [gessedLetters, setGessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [gesses, setGesses] = useState(3);
  const [score, setScore] = useState(0)
  
  //Escolhendo a catgoria e a palavra
  const pickWordAndCategory = ()=>{
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

  //Escolhendo uma palavra de cada categoria
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    return {category, word}
  }

  //Criando a função para iniciar o jogo
  const startGame = ()=>{
    const {category, word} = pickWordAndCategory();
    let wordLetters = word.split("")
    wordLetters = wordLetters.map((l) => l.toLowerCase());
    setGameStage(stages[1].name)
    setPickCategory(category)
    setPickedWord(words)
    setLetters(wordLetters)
 
    //Definidas as categorias e letras
  }

 

  //Processando a letra inserida
  const verifyLetter = (letter)=>{
    const normalizedLetters = letter.toLowerCase();
    if (
      gessedLetters.includes(normalizedLetters) ||
      wrongLetters.includes(normalizedLetters)
    ){
      return
    }
    if(letters.includes(normalizedLetters)){
      setGessedLetters((actualGessedLetters)=>[
        ...actualGessedLetters,
        normalizedLetters
      ]);
    }else{
      setWrongLetters((actualGessedLetters)=>[
        ...actualGessedLetters,
        normalizedLetters,
       
      ])

      setGesses((actualGessed) => actualGessed -1)
    }
  
  }

  const clearLettersStates = ()=> {
    setGessedLetters([])
    setWrongLetters([])
  }
  useEffect(()=>{
    if(gesses <= 0){
      clearLettersStates(); 
      setGameStage(stages[2].name)
    }
  }, [gesses])

  //Iniciando novamente o jogo
  const getStart = ()=>{
    setScore(0)
    setGesses(3)
    setGameStage(stages[0].name)
    
  } 
  

  return (
    <>
      <div className="App">
         {/*Definindo as condições ternárias para a exibição das telas*/}
         {gameStage === "start" &&  <StartScreen startGame={startGame} />}
         {gameStage === "game" &&  <Game 
                verifyLetter={verifyLetter} 
                pickedWord={pickedWord} 
                pickedCategory={pickedCategory} 
                letters={letters}
                gessedLetters={gessedLetters}
                wrongLetters={wrongLetters}
                gesses={gesses}
                score={score}
          />}
         {gameStage === "end" &&  <GameOver getStart={getStart} />}
      </div>
    </>
  )
}

export default App
