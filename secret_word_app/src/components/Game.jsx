/* eslint-disable react/prop-types */
import "./Game.css"
import {useState, useRef} from "react"

const Game = ({
      verifyLetter,
      pickedWord,
      pickedCategory,
      letters,
      gessedLetters,
      wrongLetters,
      gesses,
      score

    }) => {
      const [letter, setLetter] = useState("");
      const letterInputRef = useRef(null)
      const handleSubmit = (e)=>{
          e.preventDefault();
          verifyLetter(letter)
          setLetter("")
          letterInputRef.current.focus();

      }
  return (
   <div className="game">
    <p className="points">
      <span>{score}</span>
    </p>
    <h1>Adivinhe a palavra</h1>
    <h3 className="tip">
      Dica da Palavra: <span>{pickedCategory}</span>
    </h3>
    <p>{gesses > 1 ? "Você tem" : ""} {gesses > 1 ? gesses : ""} {gesses > 1 ? "tentativas" : "Última tentativa"}.</p>
    <div className="wordContainer">
     
      {letters.map((letter, i)=>(
        gessedLetters.includes(letter) ? (
            <span key={i} className="letter">{letter}</span>
        ) : (
            <span key={i} className="blankSquare"></span>

        )
      ))}
     
    </div>
    <div className="letterContainer">
      <p>Adivinhe a letra:</p>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input 
            type="text" 
            name="letter" 
            maxLength="1" 
            required onChange={(e)=> setLetter(e.target.value)}
            value={letter}
            ref={letterInputRef}
        />
        <button>Jogar</button>
      </form>
    </div>
    <div className="wrongLettersContainer">
      <p>Letras utilizadas</p>
     {wrongLetters.map((letter, i)=>(
        <span key={i}>{letter} </span>
     ))}
    </div>
   </div>
  )
}

export default Game