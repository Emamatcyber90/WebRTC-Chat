// @flow

import React from "react";
import TodoApp from "../containers/TodoApp";
import ErrorComponent from "../components/Error";
import Path from "./path";

export default [
  {
    path: Path.top(),
    exact: true,
    component: TodoApp
  },
  {
    path: Path.error(),
    exact: true,
    component: ErrorComponent
  }
];
