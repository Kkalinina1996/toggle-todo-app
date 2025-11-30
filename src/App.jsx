import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import TodoApp from "./components/todoApp";

export default function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}
