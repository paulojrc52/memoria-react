import React from "react";

const CardElement = ({ card }) => {
  return (
    <div id={card.id} className="card flip">
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