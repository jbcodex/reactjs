/* eslint-disable react/prop-types */
import "./StartScreen.css"

const StartScreen = ({startGame}) => {
  return (
    <div className="start">
        <h1>Secret Word</h1>
        <p>Clique para começar</p>
        <button onClick={startGame}>Começar jogo</button>
    </div>
  )
}

export default StartScreen