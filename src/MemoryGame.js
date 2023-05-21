import React, { useEffect, useState } from "react"
import GameOver from "./components/GameOver"
import GameBoard from "./components/GameBoard"
import game from './game/game'

export default function MemoryGame() {
  const [gameOver, setGameOver] = useState(false)
  const [cards, setCards] = useState([])

  useEffect(() => {
    setCards(game.creatCardsFromTechs())
  }, [])

  const restart = () => {
    setGameOver(false)
  }

  return (
    <div>
      <GameBoard cards={cards} />
      <GameOver show={gameOver} handleRestart={restart}/>
    </div>
  )
}