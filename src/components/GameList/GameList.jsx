import React from "react";
import { gamesRemaining } from "../../redux/selector";
import { useDispatch, useSelector } from "react-redux";
import "./GameList.css";
import { Link } from "react-router-dom";

const GameList = () => {
  const listRemaining = useSelector(gamesRemaining);

  return (
    <div className="game-list row px">
      {listRemaining.map((game) => (
        <div className="mb-4 col-sm-6 col-lg-3" key={game.id}>
          <Link to={"/games/" + game.id} className="link">
            <div className="game-item" key={game.id}>
              <div className="thumb">
                <img src={game.thumbnail} alt="" />
              </div>
              <div className="game-info">
                <div className="name">{game.title}</div>
                <div className="decr">{game.short_description}</div>
                <div className="genre">{game.genre}</div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default GameList;
