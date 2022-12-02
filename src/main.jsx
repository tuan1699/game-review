import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import GameList from "./components/GameList/GameList";
import GameDetail from "./pages/GameDetail/GameDetail";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import GamePage from "./pages/Game/GamePage";

const routes = createRoutesFromElements(
  <Route element={<App />} errorElement={<div>Some thing wrong :(</div>}>
    <Route index element={<GamePage />} />
    <Route path="/games/:id" element={<GameDetail />} />
  </Route>
);

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
