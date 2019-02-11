import React from "react";
import Path from "./path";
import User from "../components/User";
import NewRoom from "../components/RoomContainer/NewRoom";
import RoomList from "../components/RoomContainer/RoomList";
import ShowPage from "../components/MainContainer/ShowPage";

const connection = new WebSocket("ws://127.0.0.1:8000");

export default [
  {
    path: Path.top(),
    exact: true,
    component: props => <User connection={connection} />
  },
  {
    path: Path.createRoom(),
    exact: true,
    component: props => <NewRoom connection={connection} />
  },
  {
    path: Path.selestRoom(),
    exact: true,
    component: props => <RoomList connection={connection} />
  },
  {
    path: Path.showPage(),
    exact: true,
    component: props => <ShowPage connection={connection} />
  }
];
