import "./GameOver.css"


const GameOver = ({getStart}) => {
  return (
    <div>
        <h1>Game Over</h1>
        <button onClick={getStart}>Início</button>
    </div>
    
  )
}

export default GameOver