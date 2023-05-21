import React from "react";
import CardElement from "./CardElement";

const GameBoard = ({ cards, handleFlip }) => {
  return (
    <div className="container">
      <div id="gameBoard">
        {cards.map((card, index) => 
          <CardElement handleFlip={handleFlip} key={index} card={card} />
        )}
      </div>
    </div>
  ) 
}

export default GameBoard