import React from "react";
import "./GameItem.css";
import { Link } from "react-router-dom";

const GameItem = (game) => {
  return (
    <div className="game-item">
      <Link to={"./game/" + game.id}>
        <div className="thumb">
          <img src={game.thumbnail} alt="" />
        </div>
        <div className="game-info">
          <div className="name">{game.title}</div>
          <div className="dect">{game.short_description}</div>
          <div className="genre">{game.genre}</div>
        </div>
      </Link>
    </div>
  );
};

export default GameItem;
