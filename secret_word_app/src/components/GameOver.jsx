/* eslint-disable react/prop-types */
import "./GameOver.css"


const GameOver = ({getStart, score}) => {
  return (
    <div>
        <h1>Fim de Jogo</h1>
        <h2>
          <span>Sua pontuação foi: {score}</span>
        </h2>
        <button onClick={getStart}>Início</button>
    </div>
    
  )
}

export default GameOver