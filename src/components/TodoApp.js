import React from "react";
import styled from "styled-components";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const TodoList = styled.div`
  padding: 16px;
`;

export default function TodoApp({
  task, tasks, inputTask, addTask, redirectToError
}) {
  return (
    <div>
      <button onClick={() => redirectToError()}>
エラーページへ
      </button>
    </div>
  );
}
