import React from "react";

const CardElement = ({ card, handleFlip }) => {
  return (
    <div onClick={() => handleFlip(card)} id={card.id} className={`card ${card.flipped ? "flip" : ''} `}>
      <div className="card_front">
        <img
        className="icon"
        src={`assets/images/${card.icon}.png`}
        alt={card.icon}></img>
      </div>
      <div className="card_back">
        {"</>"}
      </div>
    </div>
  ) 
}

export default CardElement