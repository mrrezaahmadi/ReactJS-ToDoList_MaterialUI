import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store.config';

import Todo from "./pages/todos/todos.component";


function App() {
  return (
    <Provider store={store} >
      <Todo />
    </Provider>
  );
}

export default App;
