import React from "react";

const GameOver = ({ show, handleRestart }) => {
  return (
    show ? 
      <div id="gameOver">
        <div>
          Parabéns, você provou ter habilidades com a memória!
        </div>
        <button id="restart" onClick={handleRestart}>Jogar novamente</button>
      </div>
    : 
      <></>
  ) 
}

export default GameOver