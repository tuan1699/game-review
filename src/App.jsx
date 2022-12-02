import "./App.css";

import { fetchGames } from "./components/GameList/GameList.slice";
import { useDispatch } from "react-redux";
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
