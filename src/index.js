import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import TodoList from './todoList'
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import store from './store/index'
const App = (
  <Provider store={store}>
    <TodoList />
  </Provider>
)

ReactDOM.render(
  App,
  document.getElementById('root')
);

serviceWorker.unregister();
