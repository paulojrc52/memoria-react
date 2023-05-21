import React from "react";
import CardElement from "./CardElement";

const GameBoard = ({ cards }) => {
  return (
    <div className="container">
      <div id="gameBoard">
        {cards.map((card, index) => 
          <CardElement key={index} card={card} />
        )}
      </div>
    </div>
  ) 
}

export default GameBoard