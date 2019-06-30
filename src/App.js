import React, { Component } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { createStore } from "redux"
import { Provider as ReduxProvider } from "react-redux";
import { loadState, saveState } from "./modules/localStorage"
import reducer from "./modules/reducer"

// create redux store
const persistedState = loadState();
const store = createStore(reducer, persistedState);

store.subscribe(() => {
  saveState(store.getState());
})

class App extends Component {
  render() {
    return (
      <ReduxProvider store={store}>
          <div>
            <Header />
            <Main />
          </div>
      </ReduxProvider>
    )
  }
}

export default App;