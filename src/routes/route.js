import React from "react";
import Path from "./path";
import User from '../components/User'
const connection = new WebSocket('ws://127.0.0.1:8000')
export default [
  {
    path: Path.top(),
    exact: true,
    component: props => <User connection={connection} />
  }
];
