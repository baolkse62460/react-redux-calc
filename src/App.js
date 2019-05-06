import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import Calc from './containers/CalcContainer';

function App() {
  return (
    <Provider store={store}>
      <Calc />
    </Provider>
  );
}

export default App;
