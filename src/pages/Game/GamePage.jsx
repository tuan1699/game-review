import styles from "./GamePage.module.css";

import React from "react";
import Filter from "../../components/Filter/Filter";
import GameList from "../../components/GameList/GameList";

const GamePage = () => {
  return (
    <div className="row">
      <div className="col-12">
        <Filter />
      </div>
      <div className="col-12">
        <GameList />
      </div>
    </div>
  );
};

export default GamePage;
