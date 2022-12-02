import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import GameList from "./components/GameList/GameList";
import { fetchGames } from "./components/GameList/GameList.slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGames());
  }, []);

  return (
    <div className="App container">
      <Outlet />
    </div>
  );
}

export default App;
